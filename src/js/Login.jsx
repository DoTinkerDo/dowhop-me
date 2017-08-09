// @flow

import React, { Component } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import injectSheet from 'react-jss';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { database, auth, ui } from '../firebase';
import appAuth from './helpers/appAuth';

const styles = {
  margin: {
    marginBottom: '20%'
  }
};

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
    this.setState({ redirectToReferrer: true });
  };

  props: {
    location: Object,
    updateUser: Function,
    classes: Object
  };

  appUsersRef = database.ref('appUsers');

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    const { classes } = this.props;
    if (redirectToReferrer || appAuth.isAuthenticated) {
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
