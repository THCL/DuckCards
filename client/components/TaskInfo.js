import React from 'react';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';

const TaskInfo = ({ title, status, dueDate, category, points }) => {
  const styles = {
    chip: {
      margin: 4,
      color: "white"
    }
  };

  return (
    <div>
      <div className="due-date">
        Due Date: {dueDate}
      </div>
      <div className="task-title">
        <Checkbox className="checkbox" label={title} />
      </div>
      <div className="chips">
        <a className="chip">
          {category}
        </a>
        <a className="chip">
          {points} points
        </a>
      </div>
    </div>
  );
};

export default TaskInfo;