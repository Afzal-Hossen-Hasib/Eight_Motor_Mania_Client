import React from 'react';
import google from '../../../Images/Social/google.png'
import github from '../../../Images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading/Loading'

const SocialLogin = () => {

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

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
        naviagte (from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '2px'}} className='w-50 bg-danger'></div>
                <p className='mt-3 mx-3 text-center'>OR</p>
                <div style={{height: '2px'}} className='w-50 bg-danger'></div>
            </div>
            {errorHandle}
            <div>
                <button onClick={() => signInWithGoogle()} className='update-button w-50 d-block mx-auto mb-3'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>

            <div>
                <button onClick={()=> signInWithGithub()} className='update-button w-50 d-block mx-auto'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;