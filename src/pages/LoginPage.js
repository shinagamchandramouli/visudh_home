import React, { useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components'
import { useUserContext } from '../context/user_context';
import axios from 'axios'

function LoginPage() {
    const [login, setlogin] = useState(true)
    const [error, seterror] = useState('')
    const { loginFormVisible, setloginFormVisible, setMyUser } = useUserContext();

    const handleLogin = async (e) => {
        e.preventDefault();

        const api = axios.create({
            baseURL: 'https://products-api-visudh.herokuapp.com/',
            validateStatus : null
        });

        if(login) {

            let req_obj = {
                email: e.target.email.value,
                password: e.target.password.value
            }

            try {

                const res = await api.post('/user/login',req_obj)

                if(res.status === 401) seterror(res.data.msg);
                else if(res.status === 200) {
                    localStorage.setItem('user',res.data.jwt)
                    setMyUser(res.data.jwt)
                    setloginFormVisible(false);
                    seterror('')
                    setlogin(true)
                } else seterror(res.status);

                console.log(res);
                
            } catch (e) {
                seterror(e);
            }


        } else {

            let req_obj = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                contact_no: e.target.mobile.value
            }

            try {

                const res = await api.post('/user/register',req_obj)
                console.log(res);
                if(res.status === 409) seterror(res.data.msg);
                else if(res.status === 200) {
                    localStorage.setItem('user',res.data.jwt)
                    setMyUser(res.data.jwt)
                    setloginFormVisible(false);
                    seterror('')
                    setlogin(true)
                } else seterror(res.status);
                
            } catch (e) {
                seterror(e);
            }

        }

    };

    let displayForm = loginFormVisible ? 'flex' : 'none'

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (loginFormVisible) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'visible'
        }
    }, [loginFormVisible])

    return (
        <Wrapper style={{ display: displayForm, transition: 'display 0.5s' }}>
            <div className='login-container'>
                <button className='login-close' onClick= {()=> setloginFormVisible(false)}><FaWindowClose size={21}/></button>
                <h4>{login ? 'Login to your Account' : 'Create New Acoount'}</h4>
                <form onSubmit={handleLogin}>
                    {!login && <div className='row'>
                        <label>Full Name</label>
                        <input type='text' placeholder='Enter Your Name' name='name'></input>
                    </div>}
                    {!login && <div className='row'>
                        <label>Mobile</label>
                        <input type='tel' placeholder='Enter Your Mobile No:' name='mobile'></input>
                    </div>}
                    <div className='row'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter Your Email Id' name='email'></input>
                    </div>
                    <div className='row'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Your Password' name='password'></input>
                    </div>
                    <div className='error'>{error}</div>
                    <p style={{color:'blue', cursor:'pointer'}} onClick= {()=>setlogin(!login)}>{login ? 'Don\'t have an account? Create One!!' : 'Already have an account? Log In!!'}</p>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: rgba(0,0,0,0.5);
    z-index : 1;
    padding: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;

    .login-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: whitesmoke;
        width: fit-content;
        padding: 20px 40px;
        border-radius: 5px;
        box-shadow: 2px 2px 4px 4px;
    }

    .login-close {
        position: absolute;
        right: 15px;
        top: 15px;
        border: none;
        padding: 0px;
        margin: 0px;
        cursor: pointer;
    }

    .row {
        width: 30em;
        margin: 20px auto;
        text-align: left;
    }

    .row label {
        width: 25%;
        display: inline-block;
    }

    .row input {
        width: 65%;
        height: 20px;
        border: none;
        border-bottom: solid black 1px;
        border-radius: 0px;
    }

    .row input:focus {
        outline: none;
    }

    button[type=submit] {
        background-color: var(--clr-primary-5);
        color: white;
        padding: 10px;
        width: 6rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }



`

export default LoginPage
