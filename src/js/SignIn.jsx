import React, { Component } from 'react';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { ui } from '../firebase';

class SignIn extends Component {
  uiConfig = {
    callbacks: {
      signInSuccess() {
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
  render() {
    return (
      <div>
        <FirebaseUIAuth id="firebaseui-auth" ui={ui} uiConfig={this.uiConfig} />
      </div>
    );
  }
}

export default SignIn;
