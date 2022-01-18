import React from 'react';
import SettingsProvider from './context/settings/context';

import Header from './components/header/header';
import ToDo from './components/todo/todo.js';


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