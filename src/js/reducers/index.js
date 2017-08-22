// @flow

import { combineReducers } from 'redux';
import authReducer from './authentication';
import currentUserReducer from './current-user';
import profileReducer from './profile';

const reducer = combineReducers({
  authentication: authReducer,
  currentUser: currentUserReducer,
  profile: profileReducer
});

export default reducer;
