import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask,
  fetchTasks
 } from '../actions'

function task(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        title: action.text,
        status: 'To Do',
        dueDate: action.dueDate,
        category: action.category,
        points: action.points,
        owner: action.owner,
        creator: action.creator,
        comments: [],
      }
    case 'CHANGE_STATUS':
      return Object.assign({}, state, {
        action.status
      })
    default:
      return state
  }
}

function tasks(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.tasks,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  task,
  tasks
})

export default rootReducer
