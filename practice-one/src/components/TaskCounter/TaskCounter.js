import React, { memo } from 'react';
import './taskCounter.css';
import TaskCounterIcon from '../common/Icon/TaskCounterIcon';

const TaskCounter = ({ count }) => {
  return (
    <div className="task-counter">
      <TaskCounterIcon />
      {count} <span>tasks</span>
    </div>
  );
}

export default memo(TaskCounter);
