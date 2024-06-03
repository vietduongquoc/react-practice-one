import React from 'react';
import TaskCounterUI from './TaskCounterUI';

function TaskCounterLogic({ count }) {
  // Any additional logic can be added here if necessary

  return <TaskCounterUI count={count} />;
}

export default TaskCounterLogic;
