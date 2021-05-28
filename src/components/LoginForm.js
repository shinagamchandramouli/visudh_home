import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function LoginForm() {

    const loginAuth = (e)=>{
        e.preventDefault();
        const email = e.target.name;
        const password = e.target.password;

        console.log(`email: ${email} and password: ${password}`);
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm
