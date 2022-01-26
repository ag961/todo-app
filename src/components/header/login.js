import React, { useState, useContext } from 'react';
import { Button, Box } from '@mui/material/';
import { When } from 'react-if';
import { LoginContext } from '../../context/auth/loginContext';



export default function login() {

  const loginContext = useContext(LoginContext);
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    loginContext.login(values)
  }

  const handleChange = (event) => {
    setValues(values => {
      return { ...values, [event.target.name]: event.target.value }
    });
  }

  return (
    <>
      <When condition={loginContext.loggedIn}>
        <Button color='success' variant="contained" onClick={loginContext.logout}>Log Out</Button>
      </When>
      <When condition={!loginContext.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name='username' placeholder='username'></input>
          {' '}
          <input onChange={handleChange} name='password' placefolder='password'></input>
          {' '}
          <Button color='success' variant="contained" type='submit'>LOG IN</Button>
        </form>
      </When>
    </>
  )
}