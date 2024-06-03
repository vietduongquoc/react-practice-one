import React, { useState } from 'react';
import TaskItemUI from './TaskItemUI';

const TaskItemLogic = ({ task, deleteTask, editTask }) => {
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
    <TaskItemUI
      isEditing={isEditing}
      task={task}
      newName={newName}
      newDescription={newDescription}
      handleCheckboxChange={handleCheckboxChange}
      handleEditClick={handleEditClick}
      handleSaveClick={handleSaveClick}
      handleCancelClick={handleCancelClick}
      handleInputChange={handleInputChange}
      handleDescriptionChange={handleDescriptionChange}
    />
  );
};

export default TaskItemLogic;
