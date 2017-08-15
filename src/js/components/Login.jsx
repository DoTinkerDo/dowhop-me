// @flow

import React, { Component } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import injectSheet from 'react-jss';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { database, auth, ui } from '../../firebase';
import appAuth from '../helpers/appAuth';

const styles = {
  margin: {
    marginBottom: '20%'
  }
};

class Login extends Component {
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
            photoURL:
              user.photoURL ||
              `https://firebasestorage.googleapis.com/v0/b/dowhop-me.appspot.com/o/assets%2Ficons%2Fprofile-placeholder.png?alt=media&token=04033fce-4c9b-4976-8407-da41981f8046`,
            uid: user.uid
          };
          appUserRef.update(userData);
        });
      }
    });
  }

  uiConfig = {
    callbacks: {
      signInSuccess: (user: Object) => {
        this.login(user);
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

  login = (user: Object) => {
    appAuth.authenticate();
    this.props.updateUser(user);
  };

  props: {
    location: Object,
    updateUser: Function,
    classes: Object
  };

  appUsersRef = database.ref('appUsers');
  unsubscribe;

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { classes } = this.props;
    if (appAuth.isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <Row className={classes.margin}>
        <p className="text-center">
          You must be logged in to view the page at {from.pathname}
        </p>
        <FirebaseUIAuth ui={ui} {...this.uiConfig} />
      </Row>
    );
  }
}

export default injectSheet(styles)(Login);
