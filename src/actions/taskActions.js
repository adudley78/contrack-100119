import { GET_TASKS, SET_LOADING, TASKS_ERROR } from './types';

export const getTasks = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks');
    const data = await res.json();

    dispatch({
      type: GET_TASKS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
