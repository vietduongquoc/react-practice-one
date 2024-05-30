import React, { useState } from 'react';
import './addTaskForm.css'
import Button from '../common/Button';
import Input from '../common/Input';

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
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <Input
          className='description-content'
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
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
    </form>
  );
}

export default AddTaskForm;
