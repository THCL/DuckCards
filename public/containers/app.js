import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
import {render} from 'react-dom';
//actions
//components
import Tasks from '../components/Tasks.js';
import Navbar from '../components/Navbar.js';

//socketio stuff
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {

  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {


  }

  requestTasks() {

  }

  addTask() {

  }

  modifyTask() {

  }


  render() {

    //render navbar

    return (
        //passing in promise
        <Tasks task={task} />

    )

  }


}

//returns a promise
const task = axios.get('http://localhost:3000/tasks');

// [
// {
//   title: 'Set up front-end',
//   status: 'In Progress',
//   dueDate: '10/10/10',
//   category: 'Front-End',
//   points: 20,
//   notes: 'create webpack config file',
//   owner: 'Heather',
//   creator: 'Someone else',
//   comments: [
//     {
//       user: 'Joe',
//       comment: 'Cool'
//     },
//     {
//       user: 'Joe',
//       comment: 'Cool'
//     }
//   ]
// }
// ]

console.log(task);


// App.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   tasks: PropTypes.array.isRequired
// }

// function mapStateToProps(state) {
//   const { } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: cards
//   }
// }


export default App
// connect(mapStateToProps)(App)

