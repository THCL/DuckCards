import React, { Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

import Main from './Main'; // Our custom react component


class App extends Component {
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <main />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)


// // Render the main app react component into the app div.
// // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(<Main />, document.getElementById('app'));
