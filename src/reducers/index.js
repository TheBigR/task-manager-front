import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'
import taskReducer from './taskReducer'

export default combineReducers({
  user: userReducer,
  form: formReducer,
  tasks: taskReducer,
})
