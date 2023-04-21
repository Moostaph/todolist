import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTask } from '../redux/actions.js';

  const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert('Please enter a task description.');
      return;
    }
    dispatch(AddTask(description));
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
