import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { editTask, fetchTask } from '../../actions'
import TaskForm from './TaskForm'

class TaskEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.muuid)
  }

  onSubmit = (formValues) => {
    this.props.editTask(this.props.match.params.muuid, formValues)
  }

  render() {
    if (!this.props.task) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit a Task</h3>
        <TaskForm
          initialValues={_.pick(this.props.task, 'description', 'completed')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks.find(
      (task) => task._id === ownProps.match.params_id,
    ),
  }
}

export default connect(mapStateToProps, { fetchTask, editTask })(TaskEdit)