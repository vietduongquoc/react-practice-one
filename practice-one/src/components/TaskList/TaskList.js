import React from 'react';
import TaskItemLogic from '../TaskItem/TaskItem'; // Import TaskItemLogic
import './taskList.css'; 

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <li className="task-list">
      {tasks.map(task => (
        <TaskItemLogic
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
