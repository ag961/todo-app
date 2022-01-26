import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const testUsers = {
  admin: { password: 'password', name: 'Administrator', role: 'admin', capabilities: ['create', 'read', 'update', 'delete'] },
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update'] },
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['read', 'create'] },
  guest: { password: 'password', name: 'Guest', role: 'guest', capabilities: ['read'] },
};

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

  function login(credentials) {
    if (credentials.username) {
      let user = testUsers[credentials.username];
      let token = jwt.sign(user, process.env.REACT_APP_SECRET || 'banana' )
      validateToken(token)
    }
  }

  function validateToken(token) {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'banana');
      setLoginState(true, user, token);
    } catch (e) {
      setLoginState(false, {}, null)
      console.log('token verification failed', e)
    }
  }

  function can(capability) {
    return user?.capabilities?.includes(capability);
  }

  function setLoginState(loggedIn, user, token) {
    cookie.save('auth', token)
    setLoggedIn(loggedIn);
    setUser(user);
    setToken(token);
  }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token)
  }, [])

  const state = {
    loggedIn,
    login,
    logout,
    can
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}