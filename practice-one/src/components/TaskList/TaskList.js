import React from 'react';
import TaskItem from '../TaskItem/aaaa';
import './taskList.css'; 

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
