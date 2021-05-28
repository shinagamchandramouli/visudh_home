import React from 'react'
import LoginForm from '../LoginForm'
import {useState, useEffect} from 'react'
import RegisterForm from '../RegisterForm'
import '../css/UserLogin.css'
import Header from '../Header'
import Footer from '../Footer'
// import jwt_decode from "jwt-decode";

function UserLogin() {

    const [isLoggedIn,setLogin] = useState(true);

    const switchLoginState = () => {
        setLogin(prevState => !prevState);
    };


    return (
        <React.Fragment>
            <Header />
            <div className = 'login-form col-md-6'>
                <div className = 'login-nav'>
                    <h5 id='login-active'>{isLoggedIn ? 'Login' : 'Register'}</h5>
                    <h5 onClick= {switchLoginState}>{isLoggedIn ? 'Register' : 'Login'}</h5>
                </div>
                {isLoggedIn ? <LoginForm /> : <RegisterForm />}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default UserLogin
