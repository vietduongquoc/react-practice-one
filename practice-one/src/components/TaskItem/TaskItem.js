import React, { useState } from 'react';
import './taskItem.css';

const TaskItem = ({ task, deleteTask , editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleCheckboxChange = () => {
    deleteTask (task.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, newName, newDescription);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewName(task.name);
    setNewDescription(task.description);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  return (
    <div className="task-item">
      <div className="column-task">
      {!isEditing && (
        <>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            id={`checkbox-${task.id}`}
            className="hidden-checkbox"
          />
          <label htmlFor={`checkbox-${task.id}`} className="custom-checkbox"></label>
        </>
      )}

      {isEditing ? (
        <div className='task-form'>
          <div className='wrap-content'>
            <input className='title-content' type="text" value={newName} onChange={handleInputChange} />
            <textarea className='description-content' value={newDescription} onChange={handleDescriptionChange} />
          </div>
          <div className='wrap-btn'>
            <button onClick={handleCancelClick} className='btn  btn-cancel'>Cancel</button>
            <button onClick={handleSaveClick} className='btn  btn-add'>Save</button>
          </div>
        </div>
      ) : (
        <div className='wrap-content-task'>
          <span className='title-task'>{task.name}</span>
          <br />
          <span className='description-task'>{task.description}</span>
        </div>
      )}
      </div>
      {!isEditing && (
        <button className='btn-edit-task' onClick={handleEditClick}>
          <svg width="24" height="24">
            <g fill="none" fillRule="evenodd">
              <path fill="currentColor" d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"></path>
              <path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"></path>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default TaskItem;
