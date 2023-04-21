import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions.js';

const Task = ({ Task }) => {
  const [description, setDescription] = useState(Task.description);
  const [isDone, setIsDone] = useState(Task.isDone);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (!description) {
      alert('Please enter a task description.');
      return;
    }
    dispatch(editTask(Task.id, description, isDone));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
      />
      <form onSubmit={handleEdit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </li>
  );
};

export default Task;
