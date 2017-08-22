// @flow

import { combineReducers } from 'redux';
import authReducer from './authentication';
import currentUserReducer from './current-user';

const reducer = combineReducers({
  authentication: authReducer,
  currentUser: currentUserReducer
});

export default reducer;
