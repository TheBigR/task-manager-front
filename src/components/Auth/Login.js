import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions'

class Login extends React.Component {
  onSubmit = (formValues) => {
    this.props.login(formValues)
  }
  render() {
    return <div>Login</div>
  }
}

export default connect(null, { login })(Login)
