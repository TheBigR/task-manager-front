import _ from 'lodash'
import { CREATE_TASK } from '../actions/types'

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload._id]: action.payload }

    default:
      return state
  }
}

export default taskReducer
