import React from 'react';
import TaskStatusColumn from './TaskStatusColumn';

class Tasks extends React.Component {
  render() {
    const tasks = this.props.task.then(function(data) {
      return data.data;
    })

    function filterTasks(tasks) {
      return tasks.reduce(function(memo, task) {
        if (task.status === "To Do") {
          memo.todos.push(task);
        } else if (task.status === "In Progress") {
          memo.inProgress.push(task)
        } else {
          memo.completed.push(task)
        }
        return memo;
      }, {
        todos: [],
        inProgress: [],
        completed: []
      });
    };

    console.log(tasks);

    const filteredTasks = filterTasks(tasks);

    const {todos, inProgress, completed} = filteredTasks;

    return (
      <div className="task-container">
        <TaskStatusColumn tasks={todos} columnName="To-Dos" />
        <TaskStatusColumn tasks={inProgress} columnName="In Progress" />
        <TaskStatusColumn tasks={completed} columnName="Completed" />
      </div>
    );
  }
}

export default Tasks;


// {
//         title: 'To Do',
//         status: 'To Do',
//         dueDate: '10/10/10',
//         category: 'Front-End',
//         points: 20,
//         notes: 'create webpack config file',
//         owner: 'Heather',
//         creator: 'Someone else',
//         comments: [
//           {
//             user: 'Commenter1',
//             comment: 'Cool'
//           },
//           {
//             user: 'Commenter2',
//             comment: 'Cool'
//           }
//         ]
//       },

//       {
//         title: 'To Do',
//         status: 'To Do',
//         dueDate: '10/10/10',
//         category: 'Front-End',
//         points: 20,
//         notes: 'create webpack config file',
//         owner: 'Heather',
//         creator: 'Someone else',
//         comments: [
//           {
//             user: 'Commenter1',
//             comment: 'Cool'
//           },
//           {
//             user: 'Commenter2',
//             comment: 'Cool'
//           }
//         ]
//       },

//       {
//         title: 'In Progress',
//         status: 'In Progress',
//         dueDate: '10/10/10',
//         category: 'Front-End',
//         points: 20,
//         notes: 'create webpack config file',
//         owner: 'Heather',
//         creator: 'Someone else',
//         comments: [
//           {
//             user: 'Commenter1',
//             comment: 'Cool'
//           },
//           {
//             user: 'Commenter2',
//             comment: 'Cool'
//           }
//         ]
//       },

//       {
//         title: 'In Progress',
//         status: 'In Progress',
//         dueDate: '10/10/10',
//         category: 'Front-End',
//         points: 20,
//         notes: 'create webpack config file',
//         owner: 'Heather',
//         creator: 'Someone else',
//         comments: [
//           {
//             user: 'Commenter1',
//             comment: 'Cool'
//           },
//           {
//             user: 'Commenter2',
//             comment: 'Cool'
//           }
//         ]
//       },

//       {
//         title: 'Completed',
//         status: 'Completed',
//         dueDate: '10/10/10',
//         category: 'Front-End',
//         points: 20,
//         notes: 'create webpack config file',
//         owner: 'Heather',
//         creator: 'Someone else',
//         comments: [
//           {
//             user: 'Commenter1',
//             comment: 'Cool'
//           },
//           {
//             user: 'Commenter2',
//             comment: 'Cool'
//           }
//         ]
//       }


