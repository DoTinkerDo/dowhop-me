// @flow

import React, { Component } from 'react';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { ui } from '../firebase';

class SignIn extends Component {
  uiConfig = {
    callbacks: {
      signInSuccess: () => false
    },
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Log In</h3>
        <h5 className="text-center">Confirm your information to view your DoWhops</h5>
        <FirebaseUIAuth ui={ui} uiConfig={this.uiConfig} />
      </div>
    );
  }
}

export default SignIn;
