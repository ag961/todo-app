import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    callback(values);

    setValues(values => ({ text: values.text, assignee: values.assignee }));
  };

  const handleChange = (event) => {
    console.log('changing values...', values)

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