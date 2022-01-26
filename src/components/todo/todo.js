import React, { useEffect, useState, useContext } from 'react';
import { Paper, Box } from '@mui/material/';
import useForm from '../../hooks/form.js';
import Auth from '../auth';
import { v4 as uuid } from 'uuid';
import List from './list';
import Form from './form';
import ChangeSettings from '../changeSettings/changeSettings';
import { SettingsContext } from '../../context/settings/context';
import './todo.scss'

const ToDo = () => {
  const context = useContext(SettingsContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
  }, [list]);

  useEffect(() => {
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete])

  return (
    <div className='main-box'>
      <h1 className='list-heading'>To Do List: {incomplete} items pending</h1>
      <div className='todo-box'>
        <div className='input-settings'>
          <Auth capability='create'>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Auth>
          <ChangeSettings />
        </div>
        <div className='my-list'>
          <Paper>
            <Box p={2}>
              <List list={context.displayCompleted ? list : list.filter(item => !item.complete)} toggleComplete={toggleComplete} deleteItem={deleteItem} />
            </Box>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ToDo;