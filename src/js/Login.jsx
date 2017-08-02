// @flow

import React, { Component } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { database, auth, ui } from '../firebase';
import appAuth from './appAuth';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
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
      }
    });
  }

  uiConfig = {
    callbacks: {
      signInSuccess: () => {
        this.login();
        return false;
      }
    },
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

  login = () => {
    appAuth.authenticate();
    this.setState({ redirectToReferrer: true });
  };

  props: {
    location: Object
  };

  appUsersRef = database.ref('appUsers');

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Row style={{ marginTop: '50px' }}>
        <p className="text-center">
          You must be logged in to view the page at {from.pathname}
        </p>
        <FirebaseUIAuth ui={ui} {...this.uiConfig} />
      </Row>
    );
  }
}

export default Login;
