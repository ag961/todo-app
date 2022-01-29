import React, { useEffect, useState, useContext } from 'react';
import './todo.scss';
import { Paper, Box } from '@mui/material/';
import useForm from '../../hooks/form.js';
import Auth from '../auth';
import { v4 as uuid } from 'uuid';
import List from './list';
import Form from './form';
import ChangeSettings from '../changeSettings/changeSettings';
import { SettingsContext } from '../../context/settings/context';
import { LoginContext } from '../../context/auth/loginContext';
import axios from 'axios';

const ToDo = () => {
  const context = useContext(SettingsContext);
  const authContext = useContext(LoginContext)
  const token = authContext.token;

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  async function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    await axios.post(`https://ayrat-todo-dev.herokuapp.com/todo`, item, config)
  }

  async function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    await axios.delete(`${process.env.REACT_APP_SERVER}/todo/${id}`, config)
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      const config = {
        headers: { authorization: `Bearer ${token}` }
      };
      axios.put(`${process.env.REACT_APP_SERVER}/todo`, item, config)
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

  useEffect(async () => {
    if (token) {
      try {
        const config = {
          headers: { authorization: `Bearer ${token}` }
        };
        let response = await axios.get(`${process.env.REACT_APP_SERVER}/todo`, config);
        let sortedList = response.data.sort((a, b)=> {
          if (a.createdAt < b.createdAt) {
            return -1;
          }
          if (a.createdAt > b.createdAt) {
            return 1;
          }
          return 0;
        })
        setList(sortedList);
      } catch (e) {
        console.log(e.message)
      }
    }
  }, [])

  return (
    <div className='main-box'>
      <h1 className='list-heading'>To Do List: {incomplete} items pending</h1>
      <div className='todo-box'>
        <div className='input-settings'>
          <ChangeSettings />
          <Auth capability='create'>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Auth>
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