import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './taskList.css'; 

function TaskList({ tasks, editTask}) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
