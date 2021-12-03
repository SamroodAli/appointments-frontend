import { combineReducers } from 'redux';
import currentUser from './current-user';
import redirect from './redirect';

const reducers = combineReducers({
  currentUser,
  redirect,
});

export default reducers;
