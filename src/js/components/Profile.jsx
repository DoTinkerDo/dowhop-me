// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';
import CurrentUser from './CurrentUser';
import { database } from '../../firebase';
import setUserStory from '../actions/profile';

class Profile extends Component {
  // state = {
  //   value: ''
  // };

  // handleChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
  //   this.setState({ value: event.target.value });
  // };

  handleSubmit = (uid: string) => {
    const appUserRef = this.appUsersRef.child(uid);
    appUserRef.update({ story: this.props.profile });
    // this.setState({ value: '' });
  };

  props: {
    uid: string,
    authentication: Object,
    currentUser: Object,
    profile: string,
    handleUserStoryChange: Function
  };

  appUsersRef = database.ref('appUsers');
  appUserRef = this.appUsersRef.child(this.props.authentication.uid);

  render() {
    // const { value } = this.state;
    const { currentUser, profile, handleUserStoryChange } = this.props;
    // console.log('REDUX USER -> ', currentUser);
    console.log('VALUE -> ', profile);
    return (
      <div>
        {!currentUser
          ? <LoadingDots />
          : <CurrentUser
              user={currentUser}
              handleChange={handleUserStoryChange}
              handleSubmit={this.handleSubmit}
              value={profile}
            />}
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, currentUser, profile }) => ({ authentication, currentUser, profile });

const mapDispatchToProps = (dispatch: Function) => ({
  handleUserStoryChange(e) {
    dispatch(setUserStory(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
