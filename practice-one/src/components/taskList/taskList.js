import React from 'react';
import TaskItem from '../taskItem/taskItem';
import './taskList.css'; // Import CSS file

function TaskList({ tasks, editTask, removeTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        
        />
      ))}
    </div>
  );
}

export default TaskList;
