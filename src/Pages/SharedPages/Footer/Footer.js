import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
         <footer >
                <div>
                    <ul className='social-icon'>
                        <li> <a href=""><ion-icon name="logo-facebook"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-twitter"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-linkedin"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-instagram"></ion-icon></a> </li>
                    </ul>
                    
                    <ul className='menu'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Inventory</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                    <p> &#169; {year} Motor Mania || All Rights Reserved</p>
                </div> 
            </footer>
    );
};


export default Footer;