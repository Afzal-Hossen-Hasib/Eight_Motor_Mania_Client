import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../../../Images/icon/01.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../SharedPages/Loading/Loading';
import axios from 'axios';

const Register = () => {

        const [agree, setAgree] = useState(false);
        const nameRef = useRef('');
        const emailRef = useRef('');
        const passwordRef = useRef ('');
        const navigate = useNavigate();
        const location = useLocation();

        let from = location.state?.from?.pathname || "/";

        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

          const [updateProfile, updating, updateError] = useUpdateProfile(auth);

          if (loading || updating) {
            return <Loading></Loading> 
          }

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
            const {data} = await axios.post('https://lit-stream-45073.herokuapp.com/login', {email});
            console.log(data);
            localStorage.setItem('jwtToken', data.jwtToken); 
            console.log('Updated profile');
            navigate(from, { replace: true });
        };

       const handleLogin = () => {
            navigate ('/login')
       }

    return (
        <div className="container">
            <h1 className='title w-50 d-block mx-auto text-center my-4'>Please Register</h1>
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
              <Form.Group className="mb-5">
          <Form.Label className="name-title">Enter Name</Form.Label>
          <Form.Control ref={nameRef} type="text" 
          name="name" placeholder="Enter Name" />
        </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept Terms And Conditions" />
                </Form.Group>
                <Button disabled={!agree} className="delete-button w-50 d-block mx-auto mt-4" variant="" type="submit">
                  Register
                </Button>
              </Form>
              <p className='mt-3'>Already Have An Account? <span className='register-button' onClick={handleLogin}>Please Login</span></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;