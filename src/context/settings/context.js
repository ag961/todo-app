import React from 'react';

export const SettingsContext = React.createContext();

export default function SettingProvider(props) {

  const state = {
    displayCompleted: true,
    itemsPerPage: 3
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}