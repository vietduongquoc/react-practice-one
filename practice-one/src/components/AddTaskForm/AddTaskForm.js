import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import './addTaskForm.css';

function AddTaskForm({ addTask, toggleForm }) {
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
    <form className='task-form' onSubmit={handleSubmit}>
      <div className='wrap-content'>
        <Input
          className='title-content'
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="Task name"
        />
        <Input
          className='description-content'
          type="text"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
          placeholder="Description"
        />
      </div>
      <div className='wrap-btn'>
        <Button className='btn btn-cancel' type="button" onClick={handleCancel}>Cancel</Button>
        <Button
          className={`btn btn-add ${!isFormValid() ? 'btn-add-disabled' : 'btn-enabled'}`}
          type="submit"
          disabled={!isFormValid()}
        >
          Add
        </Button>
      </div>
      {error && <div className='error-message'>{error}</div>}
    </form>
  );
}

export default AddTaskForm;
