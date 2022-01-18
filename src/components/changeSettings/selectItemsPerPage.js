import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { ButtonGroup, Button, FormControlLabel } from '@mui/material/';
import { SettingsContext } from '../../context/settings/context';

export default function SelectItemsPerPage() {

  const context = useContext(SettingsContext);

  function changeItemsPerPage(event) {
    context.setItemsPerPage(Number(event.target.value))
  }

  const buttonsArr = [3, 5, 7, 10]

  return (
    <FormControlLabel label="Items Per Page" control={
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {buttonsArr.map(((num, i) =>
          <Box m={1}>
            <Button key={i} variant={num == context.itemsPerPage ? "outlined" : "contained"} onClick={changeItemsPerPage} value={num}>{num}
            </Button>
          </Box>
        ))}
      </ButtonGroup>} />
  );
}