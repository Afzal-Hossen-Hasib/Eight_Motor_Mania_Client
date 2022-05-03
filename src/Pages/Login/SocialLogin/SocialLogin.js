import React from 'react';
import google from '../../../Images/Social/google.png'
import github from '../../../Images/Social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const naviagte = useNavigate();
    let errorHandle;

    if (error) {
        
        errorHandle = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      };

      if (user) {
        naviagte ('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '2px'}} className='w-50 bg-primary'></div>
                <p className='mt-3 mx-3 text-center'>OR</p>
                <div style={{height: '2px'}} className='w-50 bg-primary'></div>
            </div>
            {errorHandle}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-100'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>

            <div className='mt-5'>
                <button className='btn btn-info w-100'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;