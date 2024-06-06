import React, { useState } from 'react';
import './taskItem.css';
import Button from '../common/Button';
import Input from '../common/Input';
import EditIcon from '../common/Icon/EditIcon';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleCheckboxChange = () => {
    deleteTask(task.id);
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
              <Input className='title-content' type="text" value={newName} onChange={handleInputChange} />
              <textarea className='description-content' value={newDescription} onChange={handleDescriptionChange} />
            </div>
            <div className='wrap-btn'>
              <Button onClick={handleCancelClick} className='btn btn-cancel'>Cancel</Button>
              <Button onClick={handleSaveClick} className='btn btn-save'>Save</Button>
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
        <Button className='btn-edit-task' onClick={handleEditClick}>
          <EditIcon />
        </Button>
      )}
    </div>
  );
};

export default TaskItem;
