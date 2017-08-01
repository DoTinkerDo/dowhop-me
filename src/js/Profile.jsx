// @flow

import React, { Component } from 'react';
import moment from 'moment';
// import LoadingDots from './LoadingDots';
// import CurrentUser from './CurrentUser';
import { database, auth } from '../firebase';

class Profile extends Component {
  state = {
    currentUser: null,
    isLoading: true,
    user: null,
    value: ''
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        const appUserRef = this.appUsersRef.child(user.uid);

        appUserRef.once('value').then(snapshot => {
          if (snapshot.val()) return;
          const date = moment().toDate();
          const userData = {
            createdOn: date,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL || `/src/images/profile-placeholder.png`,
            uid: user.uid
          };
          appUserRef.update(userData);
        });

        appUserRef.on('value', snapshot => {
          this.setState({
            currentUser: snapshot.val(),
            isLoading: false
          });
        });
      } else {
        this.setState({
          currentUser: null,
          isLoading: true,
          user: null
        });
      }
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

  appUsersRef = database.ref('appUsers');

  render() {
    return (
      <div>
        <h2>This is the Profile Page</h2>
        <pre>
          <code>
            {JSON.stringify(this.state, null, 4)}
          </code>
        </pre>
      </div>
    );
  }
}

export default Profile;
