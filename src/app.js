import React from 'react';
import SettingsProvider from './context/settings/context';
import LoginProvider from './context/auth/loginContext';
import Header from './components/header/header';
import ToDo from './components/todo/todo.js';
import Auth from './components/auth';

export default function App() {

  return (
    <>
      <SettingsProvider>
        <LoginProvider>
          <Header />
          <Auth capability='read'>
            <ToDo />
          </Auth>
        </LoginProvider>
      </SettingsProvider>
    </>
  )
}