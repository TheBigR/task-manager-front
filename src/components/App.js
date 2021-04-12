import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../history'
import Header from './Header'
import TaskCreate from './tasks/TaskCreate'
import TaskDelete from './tasks/TaskDelete'
import TaskEdit from './tasks/TaskEdit'
import TaskList from './tasks/TaskList'
import TaskShow from './tasks/TaskShow'
import TaskDeleteAll from './tasks/TaskDeleteAll'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
              
            <Route path="/tasks" exact component={TaskList} />
            <Route path="/tasks/new" exact component={TaskCreate} />
            <Route path="/tasks/edit/:muuid" exact component={TaskEdit} />
            <Route path="/tasks/delete/:id" exact component={TaskDelete} />
            <Route path="/tasks/delete" exact component={TaskDeleteAll} />
            <Route path="/tasks/:id" exact component={TaskShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App