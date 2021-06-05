import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import {api} from '../AxiosApi'

import {UserAuthLogin} from '../ContextProviders'

function LoginForm() {

    const [errorMessage, setErrorMessage] = useState('');
    const [auth, setAuth] = useContext(UserAuthLogin);

    

    const loginAuth =  async (e)=>{
        e.preventDefault();
        
        const request_object = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        
        try {
            const res = await api.post('/user/login',request_object);
            
            if(res.status === 401) {
              setErrorMessage(res.data.msg);
              console.log(errorMessage);
            } else if(res.status === 200) {
                // console.log(res);
                localStorage.setItem('jwt',res.data.jwt);
                setAuth(true)
                // console.log(auth)
            } else {
                console.log(res.data.msg);
            }
          } catch (error) {
            console.log(error)
          }
    };

    return (
        <React.Fragment>
            <form onSubmit={e => {loginAuth(e)}}>
                <Form.Group controlId="user-mail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name='email'/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password'/>
                </Form.Group>
                <h3 className= 'error'>{errorMessage}</h3>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm
