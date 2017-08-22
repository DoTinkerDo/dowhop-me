// @flow

import SET_USER_PROFILE_STORY from '../actions/actions';

export default function profileReducer(state: string = '', action: Action) {
  if (action.type === SET_USER_PROFILE_STORY) {
    return action.payload;
  }
  return state;
}
