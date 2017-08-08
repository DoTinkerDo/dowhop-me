// @flow

import React, { Component } from 'react';
import LoadingDots from './LoadingDots';
import CurrentUser from './CurrentUser';
import { database } from '../firebase';

class Profile extends Component {
  state = {
    currentUser: null,
    value: ''
  };

  componentDidMount() {
    const appUserRef = this.appUsersRef.child(this.props.user.uid);
    appUserRef.on('value', snapshot => {
      this.setState({
        currentUser: snapshot.val()
      });
    });
  }

  componentWillUnmount() {
    // TODO this needs to be set to the correct child ref
    this.appUsersRef.off();
  }

  handleChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (uid: string) => {
    const appUserRef = this.appUsersRef.child(uid);
    appUserRef.update({ nickname: this.state.value });
    this.setState({ value: '' });
  };

  props: {
    user: Object
  };

  appUsersRef = database.ref('appUsers');

  render() {
    const currentUser = this.state.currentUser;
    return (
      <div>
        {!currentUser
          ? <LoadingDots />
          : <CurrentUser
              user={this.state.currentUser}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />}
      </div>
    );
  }
}

export default Profile;
