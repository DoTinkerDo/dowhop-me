// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';
import CurrentUser from './CurrentUser';
import { database } from '../../firebase';

class Profile extends Component {
  state = {
    value: ''
  };

  handleChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (uid: string) => {
    const appUserRef = this.appUsersRef.child(uid);
    appUserRef.update({ story: this.state.value });
    this.setState({ value: '' });
  };

  props: {
    uid: string,
    authentication: Object,
    currentUser: Object
  };

  appUsersRef = database.ref('appUsers');
  appUserRef = this.appUsersRef.child(this.props.authentication.uid);

  render() {
    const { value } = this.state;
    const { currentUser } = this.props;
    console.log('REDUX USER -> ', currentUser);
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

const mapStateToProps = ({ authentication, currentUser }) => ({ authentication, currentUser });

export default connect(mapStateToProps)(Profile);
