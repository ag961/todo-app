import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { SettingsContext } from '../../context/settings/context';


export default function SwitchComplete() {

  const context = useContext(SettingsContext);

  function changeCompleted() {
    context.setDisplayCompleted(context.displayCompleted ? false : true)
  }

  return (
    <FormControlLabel label="Show Completed" control={
      <Switch
        checked={context.displayCompleted}
        onChange={changeCompleted}
        inputProps={{ 'aria-label': 'controlled' }}
      />}
    />
  );
}