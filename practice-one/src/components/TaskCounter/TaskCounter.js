import TaskCounterIcon from '../common/Icon/TaskCounterIcon';
import React from 'react';
import './taskCounter.css';

function TaskCounter({ count }) {
  return (
    <div className="task-counter">
      <TaskCounterIcon />
      {count} <span>tasks</span>
    </div>
  );
}

export default TaskCounter;
