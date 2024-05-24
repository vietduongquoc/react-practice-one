import React, { useState } from 'react';
import './addTaskForm.css'

function AddTaskForm({ addTask, toggleForm }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    }
  };

  const handleCancel = () => {
    toggleForm();
  };

  return (
    <form className='formAdd' onSubmit={handleSubmit}>
      <div className='wrapContent'>
        <input
          className='titleContent'
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <input
          className='descriptionContent'
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className='wrapBtn'>
        <button className='btn btnCancel' type="button" onClick={handleCancel}>Cancel</button>
        <button className='btn btnAdd' type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddTaskForm;
