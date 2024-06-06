import TaskItem from '../TaskItem/TaskItem';
import React, { memo } from 'react';
import './taskList.css';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <li className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </li>
  );
}

export default memo(TaskList);
