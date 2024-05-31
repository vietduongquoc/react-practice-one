import React from 'react';
import TaskItemLogic from '../TaskItem/TaskItemLogic'; // Import TaskItemLogic
import './taskList.css'; 

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItemLogic
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
