import React from 'react';
import TaskCard from './TaskCard';

const TaskStatusColumn = ({
  task
}) => {
  return (
    <div className="task-column">
      <TaskCard task={task} />
    </div>
  );
};

export default TaskStatusColumn;