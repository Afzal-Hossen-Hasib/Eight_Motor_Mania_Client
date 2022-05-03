import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import icon from '../../../Images/icon/01.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

        const [agree, setAgree] = useState(false);
        const nameRef = useRef('');
        const emailRef = useRef('');
        const passwordRef = useRef ('');
        const navigate = useNavigate();

        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

          const [updateProfile, updating, updateError] = useUpdateProfile(auth);

          if (user) {
              console.log ('user', user)
          }

        const handleRegiter = async (event) => {
            event.preventDefault();
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate('/home');
        };

       const handleLogin = () => {
            navigate ('/login')
       }

    return (
        <div className="container">
            <h1>Please Register</h1>
            <div className="my-card">
        <div className="row">
          <div className="col-md-6">
            <div className="left-cont">
              <img src={icon} alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="right-cont">
              <Form onSubmit={handleRegiter}>
              <Form.Group className="mb-3">
          <Form.Label className="name-title">Your Name</Form.Label>
          <Form.Control ref={nameRef} type="text" 
          name="name" placeholder="Enter Name" />
        </Form.Group>

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept Terms And Conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="primary w-100" type="submit">
                  Register
                </Button>
              </Form>
              <p className='mt-3'>Already Have An Account? <span onClick={handleLogin}>Please Login</span></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;