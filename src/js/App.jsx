// @flow

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { pick } from 'lodash';
import Wrapper from './Wrapper';
import SignIn from './SignIn';
import { database, auth } from '../firebase';

class App extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });

        const appUserRef = this.appUsersRef.child(user.uid);
        appUserRef.once('value').then(snapshot => {
          if (snapshot.val()) return;
          const userData = pick(user, ['displayName, email, photoURL, uid']);
          appUserRef.update(userData);
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {}

  appUsersRef = database.ref('appUsers');

  render() {
    const currentUser = this.state.currentUser;
    // console.log('CURRENTUSER -> ', currentUser);
    return (
      <Wrapper>
        <div>
          {!currentUser && <SignIn />}
        </div>
        {currentUser &&
          <div>
            <p className="text-center">
              Thanks for signing in {currentUser.displayName}
            </p>
            <Button className="pull-right" onClick={() => auth.signOut()}>
              Sign Out
            </Button>
          </div>}
      </Wrapper>
    );
  }
}

export default App;
