// @flow

import React from 'react';
import { connect } from 'react-redux';

const Me = ({ currentUser, profile }: Object) =>
  <div>
    <h2>This is the Me Page</h2>
    <p>
      {currentUser.createdOn || 'Created on Placeholder'}
      <br />
      {currentUser.displayName || 'Placeholder me name'}
      <br />
      {profile.story || 'Placeholder for user story'}
    </p>
  </div>;

const mapStateToProps = ({ currentUser, profile }) => ({ currentUser, profile });

export default connect(mapStateToProps)(Me);
