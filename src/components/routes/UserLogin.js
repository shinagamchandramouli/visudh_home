import React, { useContext } from 'react'
import LoginForm from '../LoginForm'
import {useState, useEffect} from 'react'
import RegisterForm from '../RegisterForm'
import '../css/UserLogin.css'
import Header from '../Header'
import Footer from '../Footer'
import { useHistory } from 'react-router'
import {UserAuthLogin} from '../../ContextProviders'
import jwt_decode from "jwt-decode";

function UserLogin() {
    
    const history = useHistory()
    const [auth, setAuth] = useState(false);
    
    useEffect (()=>{
        const token = localStorage.getItem('jwt');
        if(token && jwt_decode(token).email) {
            setAuth(true);
        } else {
          setAuth(false);
        }

        if(auth) {
            history.goBack();
        }
      },[auth])
    const [isLoggedIn,setLogin] = useState(true);

    
    const switchLoginState = () => {
        setLogin(prevState => !prevState);
    };


    return (
        <React.Fragment>
            <UserAuthLogin.Provider value = {[auth,setAuth]}>
                <Header />
                <div className = 'login-form col-md-6'>
                    <div className = 'login-nav'>
                        <h5 id='login-active'>{isLoggedIn ? 'Login' : 'Register'}</h5>
                        <h5 onClick= {switchLoginState}>{isLoggedIn ? 'Register' : 'Login'}</h5>
                    </div>
                    {isLoggedIn ? <LoginForm /> : <RegisterForm />}
                </div>
                <Footer />
            </UserAuthLogin.Provider>
        </React.Fragment>
    )
}

export default UserLogin
