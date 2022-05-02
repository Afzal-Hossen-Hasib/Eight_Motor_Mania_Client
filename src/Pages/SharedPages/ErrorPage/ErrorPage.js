import React from 'react';
import error from '../../../Images/404page/404.png'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
            <div className='error-container'>
                <img src={error} alt="" />
            </div>
            <h1 className='text-center'>Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;