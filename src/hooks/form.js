import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback({...values, difficulty: event.target.difficulty.value});
    console.log(event.target.difficulty.value)
    setValues(values => ({ text: values.text, assignee: values.assignee}));
  };

  const handleChange = (event) => {
    setValues(values => {
      return { ...values, [event.target.name]: event.target.value }
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;