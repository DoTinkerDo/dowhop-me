// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';
import CurrentUser from './CurrentUser';
import { database } from '../../firebase';

class Profile extends Component {
  state = {
    currentUser: null,
    value: ''
  };

  componentDidMount() {
    this.appUserRef.on('value', snapshot => {
      const currentUser = snapshot.val();
      this.setState({ currentUser });
    });
  }

  componentWillUnmount() {
    this.appUserRef.off();
  }

  handleChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (uid: string) => {
    const appUserRef = this.appUsersRef.child(uid);
    appUserRef.update({ story: this.state.value });
    this.setState({ value: '' });
  };

  props: {
    uid: string
  };

  appUsersRef = database.ref('appUsers');
  appUserRef = this.appUsersRef.child(this.props.uid);

  render() {
    const { currentUser, value } = this.state;
    return (
      <div>
        {!currentUser
          ? <LoadingDots />
          : <CurrentUser
              user={currentUser}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              value={value}
            />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(Profile);
