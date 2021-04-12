import React from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="email"
            component={this.renderInput}
            label="Enter email"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Enter Password"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.email) {
    errors.email = 'email is mandatory'
  }
  if (!formValues.password) {
    errors.password = 'password is mandatory'
  }

  return errors
}

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm)
