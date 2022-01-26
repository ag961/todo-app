import React, { useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../context/auth/loginContext';

export default function Auth(props) {

  let loginState = useContext(LoginContext);

  const isLoggedIn = loginState.loggedIn;
  const can = loginState.can(props.capability)

  return (
    <When condition={isLoggedIn && can}>
      {props.children}
    </When>
  )
}
