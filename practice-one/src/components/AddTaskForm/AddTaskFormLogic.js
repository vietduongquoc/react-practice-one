import React, { useState } from 'react';
import AddTaskFormUI from './AddTaskFormUI';

function AddTaskFormLogic({ addTask, toggleForm }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (taskName.trim()) {
      try {
        await addTask(taskName, taskDescription);
        setTaskName('');
        setTaskDescription('');
      } catch (error) {
        console.error('Error adding task: ', error);
        setError('Failed to add task. Please try again.');
      }
    }
  };

  const handleCancel = () => {
    toggleForm();
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const isFormValid = () => {
    return taskName.trim() !== '';
  };

  return (
    <AddTaskFormUI
      taskName={taskName}
      taskDescription={taskDescription}
      error={error}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onTaskNameChange={handleTaskNameChange}
      onTaskDescriptionChange={handleTaskDescriptionChange}
      isFormValid={isFormValid()}
    />
  );
}

export default AddTaskFormLogic;
