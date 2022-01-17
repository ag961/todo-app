import React from 'react';
import SettingsProvider from './context/settings/context';

import ToDo from './components/todo/todo.js';
import Header from './components/header/header';


export default function App() {

  return (
    <>
      <SettingsProvider>
        <Header />
        <ToDo />
      </SettingsProvider>
    </>
  )
}