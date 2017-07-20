import React, { Component } from 'react';
import Wrapper from './Wrapper';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { ui } from '../firebase';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  uiConfig = {
    callbacks: {
      signInSuccess() {
        return true;
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
      <Wrapper>
        <FirebaseUIAuth id="firebaseui-auth" ui={ui} uiConfig={this.uiConfig} />
      </Wrapper>
    );
  }
}

export default App;
