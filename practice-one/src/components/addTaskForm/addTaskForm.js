import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="button" onClick={handleCancel}>Cancel</button>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
