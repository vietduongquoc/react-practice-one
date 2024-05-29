import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './taskList.css'; 

function TaskList({ tasks, editTask, deleteTask}) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
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
