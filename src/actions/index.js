import backend from '../apis/backend'
import history from '../history'
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  FETCH_TASKS,
  // SORTBYCREATION,
  // SORTBYUPDATE,
  CREATE_USER,
  LOGIN,
  LOGOUT,
  // DELETE_USER,
  // EDIT_USER,
  // FETCH_CURRENT_USER,
} from './types'

const setHeader = (state) => {
  return {
    headers: { Authorization: `Bearer ${state.user.currentUser.token}` },
  }
}

export const createUser = (formValues) => async (dispatch) => {
  const response = await backend.post('/users', formValues)
  dispatch({ type: CREATE_USER, payload: response.data })
  history.push('/')
}

export const createTask = (formValues) => async (dispatch, getState) => {
  const response = await backend.post(
    '/tasks',
    formValues,
    setHeader(getState()),
  )
  dispatch({ type: CREATE_TASK, payload: response.data })
  history.push('/tasks')
}

export const deleteTask = (_id) => async (dispatch, getState) => {
  console.log(_id)
  const response = await backend.delete(`/tasks/${_id}`, setHeader(getState()))
  dispatch({ type: DELETE_TASK, payload: response.data._id })
  history.push('/tasks')
}

export const editTask = (_id, formValues) => async (dispatch, getState) => {
  const response = await backend.patch(
    `/tasks/${_id}`,
    formValues,
    setHeader(getState()),
  )
  dispatch({ type: EDIT_TASK, payload: response.data })
  history.push('/tasks')
}

export const toggleTask = (_id) => async (dispatch, getState) => {
  const currentStatus = getState().tasks[_id].completed
  await editTask(_id, { completed: !currentStatus })
}

export const fetchTask = (_id) => async (dispatch, getState) => {
  const response = await backend.get(`/tasks/${_id}`, setHeader(getState()))
  dispatch({ type: FETCH_TASK, payload: response.data })
}

export const fetchTasks = () => async (dispatch, getState) => {
  const response = await backend.get('/tasks', setHeader(getState()))
  dispatch({ type: FETCH_TASKS, payload: response.data })
}

export const login = (formValues) => async (dispatch) => {
  const response = await backend.post('/users/login', formValues)
  dispatch({ type: LOGIN, payload: response.data })
  history.push('/')
}

export const logout = () => async (dispatch, getState) => {
  await backend.post('/users/logout', null, setHeader(getState()))
  dispatch({ type: LOGOUT })
  history.push('/')
}
