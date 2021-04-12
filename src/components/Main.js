import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Main extends React.Component {
  render() {
    if (!this.props.isSignedIn) {
      return (
        <div>
          <Link to="/users/login" className="button ui ">
            Login
          </Link>
          <Link to="/users/create" className="button ui">
            Register
          </Link>
        </div>
      )
    }
    return (
      <div>
        <Link to="/tasks" className="button ui">
          Tasks
        </Link>
        <Link to="/tasks/new" className="button ui">
          Create Task
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn }
}
export default connect(mapStateToProps)(Main)
