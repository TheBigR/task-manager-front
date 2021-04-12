import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTasks, toggleTask } from '../../actions'

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  componentDidUpdate() {
    // this.props.fetchTasks()
  }

  renderList() {
    return this.props.tasks.map((task) => {
      return (
        <div className="item" key={task._id}>
          <div className="left floated content">
            <div className="ui checkbox centered">
              <input
                type="checkbox"
                name="example"
                checked={task.completed}
                onChange={() => this.props.toggleTask(task._id)}
              />
              <label>Done?</label>
            </div>
          </div>
          <div className="content">{task.description}</div>
          <div className="right floated content">
            <Link to={`/tasks/edit/${task._id}`} className="ui button primary">
              Edit
            </Link>
            <Link
              to={`/tasks/delete/${task._id}`}
              className="ui button negative"
            >
              Delete
            </Link>
          </div>
        </div>
      )
    })
  }

  renderToolbar() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Link to="/tasks/new" className="ui labeled icon button">
          <i className="plus square outline icon"></i>
          Add Task
        </Link>
        {/* <button className="ui button" onClick={this.props.sortByCreation}>
          By Creation
        </button>
        <button className="ui button" onClick={this.props.sortByUpdate}>
          By Update
        </button> */}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        <h2>Tasks</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks),
    isSignedIn: state.user.isSignedIn,
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  toggleTask,
})(TaskList)
