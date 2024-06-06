import TaskItem from '../TaskItem/TaskItem'; // Import TaskItemLogic
import React from 'react';
import './taskList.css';

function TaskList({ tasks, editTask, deleteTask }) {
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

export default TaskList;
