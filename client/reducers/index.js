import {combineReducers } from 'redux'
import {
  REQUEST_CARDS, RECEIVE_CARDS,
  POST_CARD, FILTER_CARDS,
  LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}



function cards(state = {
  isFetching: false,
  cards: []
}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return Object.assign({}, state, {
        isFetching: false,
        cards: action.cards,
        lastUpdated: action.receivedAt
      })
    case REQUEST_CARDS:
      return Object.assign({}, state, {
        isFetching: true,
      })

    default:
      return state
  }
}




const rootReducer = combineReducers({
  auth
  //get cards
  //receive cards
  //filter cards
})

export default rootReducer