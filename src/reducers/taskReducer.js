import _ from 'lodash'
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  FETCH_TASKS,
} from '../actions/types'

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload._id]: action.payload }
    case DELETE_TASK:
      return _.omit(state, action.payload)
    case EDIT_TASK:
      return { ...state, [action.payload._id]: action.payload }
    case FETCH_TASK:
      return { ...state, [action.payload._id]: action.payload }
    case FETCH_TASKS:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    default:
      return state
  }
}

export default taskReducer
