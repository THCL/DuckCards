import React from 'react';
import TaskStatusColumn from './TaskStatusColumn';

class Tasks extends React.Component {
  render() {
    return (
      <div className="task-container">
        <TaskStatusColumn task={this.props.task} />
        <TaskStatusColumn task={this.props.task} />
        <TaskStatusColumn task={this.props.task} />
      </div>
    );
  }
}

export default Tasks;