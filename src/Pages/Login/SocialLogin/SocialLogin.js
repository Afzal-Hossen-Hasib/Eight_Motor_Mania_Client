import React from 'react';
import google from '../../../Images/Social/google.png'
import github from '../../../Images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading/Loading'

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const naviagte = useNavigate();

    let errorHandle;

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        
        errorHandle = <div>
            <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
          </div>
      };

      if (googleUser || githubUser) {
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
                <button onClick={()=> signInWithGithub()} className='btn btn-info w-100'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;