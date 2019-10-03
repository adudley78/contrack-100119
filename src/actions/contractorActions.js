import {
  GET_CONTRACTORS,
  ADD_CONTRACTOR,
  DELETE_CONTRACTOR,
  SET_LOADING,
  CONTRACTORS_ERROR
} from './types';

export const getContractors = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/contractors');
    const data = await res.json();

    dispatch({
      type: GET_CONTRACTORS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CONTRACTORS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
