// @flow

import SET_USER_PROFILE_STORY from './actions';

const setUserStory = (value: string) => ({
  type: SET_USER_PROFILE_STORY,
  payload: value
});

export default setUserStory;
