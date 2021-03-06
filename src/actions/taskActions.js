import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SEARCH_TASKS,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

export const getTasks = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks');
    const data = await res.json();

    dispatch({
      type: GET_TASKS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addTask = task => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TASK,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteTask = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/tasks/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateTask = task => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_TASK,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const searchTasks = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/tasks?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_TASKS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrent = task => {
  return {
    type: SET_CURRENT,
    payload: task
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
