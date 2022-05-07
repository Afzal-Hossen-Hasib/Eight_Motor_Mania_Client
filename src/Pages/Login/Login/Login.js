import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import login from "../../../Images/icon/01.png";
import Loading from "../../SharedPages/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
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
        <p className='text-danger text-center'>{error?.message}</p>
      </div>
  };

  const handleFormSubmit = async event => {
    event.preventDefault ();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:5000/login', {email});
    console.log(data);
    localStorage.setItem('jwtToken', data.jwtToken); 
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
      <h4 className="text-center title w-50 d-block mx-auto text-center my-4">
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
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className="delete-button w-50 d-block mx-auto mt-4" variant="" type="submit">
                  Log In
                </Button>
              </Form>
              {errorHandle}
              <p className="text-center my-3">New To Motor Mania? <span className="register-button" onClick={navigateRegister}>Please Register</span></p>
              <p className="text-center">Forgot Password? <span className="register-button" onClick={resetPassword}>Reset Password</span></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
