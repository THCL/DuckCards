import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask,
  fetchTasks
 } from '../actions'


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






















function view(state = 'ALL', action) {
  switch (action.type) {
    case 'FILTER_VIEW':
      return {
        filteredView: action.filter
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  task,
  tasks,
  view
})

export default rootReducer
