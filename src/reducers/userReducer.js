import {
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  LOGIN,
  LOGOUT,
} from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: false,
  currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, isSignedIn: true, currentUser: action.payload }
    case LOGIN:
      return { ...state, isSignedIn: true, currentUser: action.payload }
    case LOGOUT:
      return { ...state, isSignedIn: false, currentUser: false }
    case DELETE_USER:
      return { ...state, isSignedIn: false, currentUser: false }
    case EDIT_USER:
      return { ...state, isSignedIn: true, currentUser: action.payload }
    default:
      return state
  }
}

export default userReducer
