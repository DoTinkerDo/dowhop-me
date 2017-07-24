// @flow

import React, { Component } from 'react';
import Wrapper from './Wrapper';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import { database, auth } from '../firebase';

class App extends Component {
  state = {
    currentUser: {},
    isLoading: true,
    user: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        const appUserRef = this.appUsersRef.child(user.uid);

        appUserRef.once('value').then(snapshot => {
          if (snapshot.val()) return;
          const date = new Date();
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
          currentUser: {},
          isLoading: true,
          user: null
        });
      }
    });
  }

  componentWillUnmount() {
    // TODO this needs to be set to child
    this.appUsersRef.off();
  }

  appUsersRef = database.ref('appUsers');

  render() {
    const { currentUser, isLoading, user } = this.state;
    return (
      <Wrapper>
        {!user && <SignIn />}
        {user && <CurrentUser loading={isLoading} user={currentUser} />}
      </Wrapper>
    );
  }
}

export default App;
