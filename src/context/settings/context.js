import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

export default function SettingProvider(props) {

  let defaultSettings = {
    displayCompleted: true,
    itemsPerPage: 3
  }

  let retrievedValues = JSON.parse(localStorage.getItem('todo-settings')) === null
   ? defaultSettings
   : JSON.parse(localStorage.getItem('todo-settings'))

  console.log('retrieved values', retrievedValues)

  const [displayCompleted, setDisplayCompleted] = useState(retrievedValues.displayCompleted);
  const [itemsPerPage, setItemsPerPage] = useState(retrievedValues.itemsPerPage || 3);

  useEffect(()=>{
   let values = {
     displayCompleted,
     itemsPerPage
   }
   console.log(values);
   localStorage.setItem('todo-settings', JSON.stringify(values))
  })
 
  const state = {
    displayCompleted,    
    itemsPerPage,
    setDisplayCompleted,
    setItemsPerPage
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}