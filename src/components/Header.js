// import react from 'react'

// function Header()
// {
//     return (
//         <header id="header" className="fixed-top d-flex align-items-center">
//             <div className="container d-flex align-items-center">

//                 <div className="logo mr-auto">
//                 <h1 className="text-light"><a href="index.html"><span class="text-primary">Visudh</span><span class="text-danger">Ajivam</span></a></h1>
//                 </div>

//                 <nav className="nav-menu d-none d-lg-block">
//                 <ul>
//                     <li className="active"><a href="#index.html">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#departments">Departments</a></li>
//                     <li><a href="#services">Services</a></li>
//                     <li><a href="#team">Team</a></li>
//                     <li><a href="#contact">Contact</a></li>

//                     <li className="get-started"><a href="/appointment">Make an Appointment</a></li>
//                 </ul>
//                 </nav>

//             </div>
//         </header>

//         );
// }

// export default Header;

import React from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './css/Header_Footer.css'

import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect (()=>{
    const token = localStorage.getItem('jwt');
    if(token && jwt_decode(token).email) {
      // console.log(jwt_decode(token).email)
        setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  },[])


  const handleLoginStatus = ()=> {
    if(isLoggedIn) {
      localStorage.removeItem('jwt');
      setIsLoggedIn ( prevAuth => !prevAuth);
    }
    else {
      history.push('/login');
    }
  }
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
        <h1><span className="text-primary">Visudh</span><span className="text-danger">Ajivam</span></h1>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeMobileMenu}
              >
                About
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link
                activeClass="section2"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeMobileMenu}
              >
                ContactUs
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Footer
              </Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#" className="sign-up">SIGN-IN</a>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              Make an Appointment
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a className="signin-btn" 
            onClick = {handleLoginStatus}>{isLoggedIn ? 'Logout' : 'SIGN-IN'}</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            Make An Appointment
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
