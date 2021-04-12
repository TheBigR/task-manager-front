import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTask, deleteTask } from '../../actions'
import Modal from '../Modal'
import history from '../../history'

class TaskDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params._id)
  }

  renderActions() {
    const { _id } = this.props.match.params
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteTask(_id)}
        >
          Delete
        </button>
        <Link to="/tasks" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.task) {
      return 'Are you sure you want to delete this task?'
    }

    return `Are you sure you want to delete the task with the description: ${this.props.task.description}`
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params._id] }
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(TaskDelete)
