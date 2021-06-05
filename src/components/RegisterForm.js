import React, { useContext, useEffect, useState } from 'react'
import {api} from '../AxiosApi'
import { UserAuthLogin } from '../ContextProviders';

function RegisterForm() {

  const [errorMessage, setErrorMessage] = useState('');
  const [auth, setAuth] = useContext(UserAuthLogin);


  const onFormSubmit = async (e)=>{
    e.preventDefault();

    const request_object = {};

    for(let i=0; i<6; i++)
    {
      request_object[e.target[i].name] = e.target[i].value;
    }

    // console.log(request_object);
    try {
      const res = await api.post('/user/register',request_object);
      // console.log(res);
      if(res.status === 409 || res.status === 401)  {
        setErrorMessage(res.data.msg);
      } else if(res.status === 200) {
        // console.log(res);
        localStorage.setItem('jwt',res.data.jwt);
        setAuth(true);
      } else {
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className="container">
      <form onSubmit={onFormSubmit} method = 'post'>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="form-control"
            name = 'name'
            // value={this.state.name}
            // onChange={this.onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            required
            className="form-control"
            name = 'email'
            // value={this.state.email}
            // onChange={this.onChangeEmail}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            required
            className="form-control"
            name = 'password'
            // value={this.state.password}
            // onChange={this.onChangePassword}
          />
        </div>

        <div className="form-group">
          <label>Phone: </label>
          <input
            type="tel"
            placeholder="999999999"
            required
            className="form-control"
            name = 'contact_no'
            // value={this.state.password}
            // onChange={this.onChangePassword}
          />
        </div>
        
        <div className="form-group">
          <label>Aadhar: </label>
          <input
            type="number"
            placeholder="xxx-xxx-xxxx"
            required
            className="form-control"
            name = 'aadhar_no'
            // value={this.state.password}
            // onChange={this.onChangePassword}
          />
        </div>
        
        <div className="form-group">
          <label>Category: </label>
          <select name="category" id="sign-up-categories" >
              <option value="Doctor">Doctor</option>
              <option value="Customer">Customer</option>
              <option value="Employe">Employee</option>
          </select>
        </div>

        {/* {this.state.resMessage == 404 && (
          <h3 className="error"> Complete all the fields! </h3>
        )}
        {this.state.resMessage == 422 && (
          <h3 className="error"> Email already registered! </h3>
        )}
        {this.state.resMessage == 400 && (
          <h3 className="error"> Username already registered! </h3>
        )}
        {this.state.resMessage == 200 && (
          <h3 className="error"> Success! </h3>
        )} */}
        <h3 className= 'error'>{errorMessage}</h3>

        <div className="form-group">
          <button
            class="btn btn-primary waves-effect waves-light"
            type="submit"
            name="action"
            value="Register"
          >
            Register
            
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
