import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import contractorReducer from './contractorReducer';

export default combineReducers({
  task: taskReducer,
  contractor: contractorReducer
});
