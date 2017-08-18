import { combineReducers } from 'redux';
import authReducer from './authentication';

const reducer = combineReducers({
  authentication: authReducer
});

export default reducer;
