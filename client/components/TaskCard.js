import React from 'react';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaskInfo from './TaskInfo';
import TaskNotes from './TaskNotes';
import TaskComments from './TaskComments';

import {grey800, grey400, blueGrey500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey800,
    borderColor: grey400,
    accent1Color: blueGrey500
  }
});


class TaskCard extends React.Component {
  render() {
    const {task} = this.props;
    const cardContents = <div>
                          <TaskInfo
                            title={task.title}
                            status={task.status}
                            dueDate={task.dueDate}
                            category={task.category}
                            points={task.points} />
                          <TaskComments comments={task.comments}/>
                        </div>;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper className="task-card-container"
          zDepth={1}
          children={cardContents} />
      </MuiThemeProvider>
    );
  }
}

export default TaskCard;