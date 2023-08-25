import React from 'react';
import { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    // if it is in the edit it initializes input with the value from props.edit.value, else it initializes input as an empty string
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {

    //to avoid refreshing
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputFocus}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputFocus}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add 
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;