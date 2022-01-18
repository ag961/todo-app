import React, { useContext } from 'react';
import SwitchComplete from './switchComplete';
import SelectItemsPerPage from './selectItemsPerPage';
import Box from '@mui/material/Box';
import { FormGroup, Paper } from '@mui/material';


export default function changeSettings() {


  return (
    <Box p={2} sx={{ p: 2, width: 'fit-content' }}>
      <Paper>
        <Box p={2} >
          <FormGroup >
            <SwitchComplete />
            <SelectItemsPerPage />
          </FormGroup>
        </Box>
      </Paper>
    </Box>
  );
}