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
    <form className='task-form' onSubmit={handleSubmit}>
      <div className='wrap-content'>
        <input
          className='title-content'
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <input
          className='description-content'
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className='wrap-btn'>
        <button className='btn btn-cancel' type="button" onClick={handleCancel}>Cancel</button>
        <button className='btn btn-add' type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddTaskForm;
