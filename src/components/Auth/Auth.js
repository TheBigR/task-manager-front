import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions'
import { Link } from 'react-router-dom'

class Auth extends React.Component {
  onLogoutClick = () => {
    this.props.logout()
  }

  render() {
    if (this.props.isSignedIn) {
      return (
        <button className="ui red button" onClick={this.onLogoutClick}>
          <i className="icon" />
          Log Out
        </button>
      )
    } else {
      return (
        <Link to="/users/login" className="button ui blue">
          Login
        </Link>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn }
}

export default connect(mapStateToProps, { logout })(Auth)
