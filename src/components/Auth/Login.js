import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions'
import LoginForm from './LoginForm'

class Login extends React.Component {
  onSubmit = (formValues) => {
    this.props.login(formValues)
  }
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { login })(Login)
