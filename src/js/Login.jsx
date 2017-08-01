// @flow

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { ui } from '../firebase';
import appAuth from './appAuth';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

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
        <pre>
          <code>
            {JSON.stringify(from, null, 4)}
          </code>
        </pre>
        <FirebaseUIAuth ui={ui} {...this.uiConfig} />
      </Row>
    );
  }
}

export default Login;
