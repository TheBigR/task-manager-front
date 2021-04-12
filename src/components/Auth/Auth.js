import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../actions'

class Auth extends React.Component {
  componentDidMount() {}



  onLoginClick = () => {
    this.user.login()
  }

  onLogoutClick = () => {
    this.user.logout()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red button" onClick={this.onLogoutClick}>
          <i className="icon" />
          Log Out
        </button>
      )
    } else {
      return (
        <button className="ui red button" onClick={this.onLoginClick}>
          <i className="icon" />
          Log In 
        </button>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn }
}

export default connect(mapStateToProps, { login, logout })(Auth)
