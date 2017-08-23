// @flow

import { database } from '../../firebase';
import SET_USER_PROFILE_STORY from './actions';

const userStoryRef = database.ref('appUser').child(uid);

export const storyValue = (value: string) => ({
  type: SET_USER_PROFILE_STORY,
  payload: value
});

export const submitUserStory = (value: string) => {};
