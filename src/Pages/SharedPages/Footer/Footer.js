import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
         <footer className='footer-section'>
                <div className='footer'>
                    <ul className='footer-list'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    </ul>
                    <p className='footer-title'>Motor <span>Mania</span> &#169; {year}</p>
                </div> 
            </footer>
    );
};

export default Footer;