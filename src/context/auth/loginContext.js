import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios';
import base64 from 'base-64';

export const LoginContext = React.createContext();

export default function LoginProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    username: '',
    token: '',
    capabilities: []
  });

  function logout() {
    setLoginState(false, {}, null)
  }

  async function login(credentials) {
    try {
      let encodedCredentials = base64.encode(`${credentials.username}:${credentials.password}`)
      const config = {
        headers: {
          authorization: `Basic ${encodedCredentials}`
        }
      }
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/signin`, config);
      const authenticatedUser = response.data;
      setLoginState(true, authenticatedUser, authenticatedUser.token)
    } catch (e) {
      if (e.response.status === 403) {
        logout();                
        window.alert('Invalid Credentials');
      } else {
        console.log(e.response);
      }
    }
  }

  async function validateToken(token) {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/verify`, config);
      const authenticatedUser = response.data;
      setLoginState(true, authenticatedUser, authenticatedUser.token)
    } catch (e) {
      logout();
      window.alert('token verification failed');
    }
  }

  function can(capability) {
    return user?.capabilities?.includes(capability);
  }

  function setLoginState(loggedIn, user, token) {
    cookie.save('auth', token)
    setToken(token);
    setUser(user);
    setLoggedIn(loggedIn);
  }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token)
  }, [])

  const state = {
    loggedIn,
    token,
    login,
    logout,
    can,
    capabilities: user.capabilities
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}