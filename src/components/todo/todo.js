import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
import List from './list';
import Form from './form';
import ChangeSettings from '../changeSettings/changeSettings'

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

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
    <>
      <h1>To Do List: {incomplete} items pending</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      <ChangeSettings />      
      <List list={list} toggleComplete={toggleComplete} />
    </>
  );
};

export default ToDo;