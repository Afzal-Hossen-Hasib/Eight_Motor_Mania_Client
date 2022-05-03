import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import login from "../../../Images/icon/01.png";
import Loading from "../../SharedPages/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorHandle;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail (auth);

  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
        
    errorHandle = <div>
        <p className='text-danger'>Error: {error?.message}</p>
      </div>
  };

  const handleFormSubmit = event => {
    event.preventDefault ();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email, password);
  }

  const navigateRegister = event => {
    navigate ('/register')
  }

  const resetPassword = async() => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast ('Please Enter Your Email Adress');
    }
  }

  return (
    <div className="container">
      <h4 className="text-center fitness-title mb-4">
        Please Login
        <hr />
      </h4>
      <div className="my-card">
        <div className="row">
          <div className="col-md-6">
            <div className="left-cont">
              <img src={login} alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="right-cont">
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                  Log In
                </Button>
              </Form>
              {errorHandle}
              <p>New To Motor Mania? <span className="register-button" onClick={navigateRegister}>Please Register</span></p>
              <p>Forgot Password? <span className="register-button" onClick={resetPassword}>Reset Password</span></p>
              <SocialLogin></SocialLogin>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
