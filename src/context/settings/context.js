import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingProvider(props) {

  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3)


  
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