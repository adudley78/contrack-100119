import {
  GET_CONTRACTORS,
  ADD_CONTRACTOR,
  DELETE_CONTRACTOR,
  SET_LOADING,
  CONTRACTORS_ERROR
} from '../actions/types';

const initialState = {
  contractors: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTRACTORS:
      return {
        ...state,
        contractors: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
