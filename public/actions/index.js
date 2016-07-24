// import axios from 'axios'

// export const REQUEST_TASKS = 'REQUEST_TASKS'
// export const RECEIVE_TASKS = 'RECIEVE_TASKS'
// export const POST_TASK = 'POST_TASK'


// export function requestTasks() {
//   return {
//     type: REQUEST_TASKS
//   }
// }

// export function receiveTasks(tasks) {
//   return {
//     type: RECEIVE_TASKS,
//     tasks,
//     data: json.data.map(task => task),
//     receivedAt: Date.now()
//   }
// }

// export function postTask() {
//   return {
//     type: POST_TASK
//   }
// }

// export function fetchTasks() {
//   return dispatch => {
//     console.log('fetchTasks')
//     return axios.get('http://localhost:3000/tasks')
//       .then(response => {
//         console.log(response)
//         response.data.json()})
//       .then(json => dispatch(receiveTasks(json)))
//       .catch(function(error) {
//         console.log(error);
//       });
//   }
// }

export function changeStatus(status) {
  return {
    type: 'CHANGE_STATUS',
    status
  }
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    title,
    dueDate,
    category,
    points,
    owner,
    creator
  }
}



