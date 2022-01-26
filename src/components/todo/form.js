import React from 'react';
import './form.scss';
import { Paper, Box, Button } from '@mui/material';

export default function Form({ handleSubmit, handleChange }) {

  return (
    <Paper>
      <Box p={2} >

        <form className='input-form' onSubmit={handleSubmit}>

          <h2>Add To Do Item</h2>
          <div>
            <label>
              <p>To Do Item</p>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>
          </div>

          <div>
            <label>
              <p>Assigned To</p>
              <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>
          </div>

          <div>
            <label>
              <p>Difficulty</p>
              <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </label>
          </div>

          <div>
            <Button type="submit" variant="outlined">Add Item</Button>
          </div>
        </form>
      </Box>
    </Paper>
  )
}