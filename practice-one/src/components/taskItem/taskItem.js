import React, { useState } from 'react';
import './taskItem.css'; // Import CSS file

const TaskItem = ({ task, removeTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleCheckboxChange = () => {
    removeTask(task.id);
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
      <input type="checkbox" onChange={handleCheckboxChange} />
      {isEditing ? (
        <div>
          <input type="text" value={newName} onChange={handleInputChange} />
          <br />
          <textarea value={newDescription} onChange={handleDescriptionChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span>
          <br />
          <span>{task.description}</span>
        </div>
      )}
      {!isEditing && (
        <button onClick={handleEditClick}>
          <svg width="20" height="20">
            <use xlinkHref="#edit-icon" />
          </svg>
          Edit
        </button>
      )}
    </div>
  );
};

export default TaskItem;
