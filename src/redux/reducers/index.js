import { combineReducers } from 'redux';
import currentUser from './current-user';

const reducers = combineReducers({
  currentUser,
});

export default reducers;
