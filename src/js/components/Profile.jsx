// @flow

import React from 'react';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';
import CurrentUser from './CurrentUser';
import { storyValue, createStory, clearInput } from '../actions/profile';

const Profile = (props: {
  currentUser: Object,
  profile: Object,
  value: string,
  handleChange: Function,
  handleSubmit: Function
}) => {
  const { currentUser, value, profile, handleChange, handleSubmit } = props;
  console.log(profile.story, ' == ', value);
  return (
    <div>
      {!currentUser
        ? <LoadingDots />
        : <CurrentUser
            user={currentUser}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={value}
            profile={profile}
          />}
    </div>
  );
};

const mapStateToProps = ({ authentication, currentUser, value, profile }) => ({
  authentication,
  currentUser,
  value,
  profile
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleChange(e) {
    dispatch(storyValue(e.target.value));
  },
  handleSubmit(e, story, uid) {
    e.preventDefault();
    dispatch(createStory({ story, uid }));
    dispatch(clearInput());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
