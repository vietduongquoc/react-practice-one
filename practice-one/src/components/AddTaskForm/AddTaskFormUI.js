import React from 'react';
import './addTaskForm.css';
import Button from '../common/Button';
import Input from '../common/Input';

function AddTaskFormUI({
  taskName,
  taskDescription,
  error,
  onSubmit,
  onCancel,
  onTaskNameChange,
  onTaskDescriptionChange,
  isFormValid,
}) {
  return (
    <form className='task-form' onSubmit={onSubmit}>
      <div className='wrap-content'>
        <Input
          className='title-content'
          type="text"
          value={taskName}
          onChange={onTaskNameChange}
          placeholder="Task name"
        />
        <Input
          className='description-content'
          type="text"
          value={taskDescription}
          onChange={onTaskDescriptionChange}
          placeholder="Description"
        />
      </div>
      <div className='wrap-btn'>
        <Button className='btn btn-cancel' type="button" onClick={onCancel}>Cancel</Button>
        <Button
          className={`btn btn-add ${!isFormValid ? 'btn-add-disabled' : 'btn-enabled'}`}
          type="submit"
          disabled={!isFormValid}
        >
          Add
        </Button>
      </div>
      {error && <div className='error-message'>{error}</div>}
    </form>
  );
}

export default AddTaskFormUI;
