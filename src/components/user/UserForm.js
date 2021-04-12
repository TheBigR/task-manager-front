import React from 'react'
import { Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

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
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="name" component={this.renderInput} label="Enter name" />
        <Field name="email" component={this.renderInput} label="Enter email" />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter password"
        />
        <Field name="age" component={this.renderInput} label="Enter Age" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.name) {
    errors.name = 'Name is mandatory'
  }
  if (!formValues.email) {
    errors.email = 'Email is mandatory'
  }
  if (!formValues.password) {
    errors.password = 'You must enter a password'
  }

  return errors
}

export default reduxForm({
  form: 'userForm',
  validate,
})(UserForm)
