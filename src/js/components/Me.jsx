// @flow

import React from 'react';
import { connect } from 'react-redux';

const Me = ({ currentUser }: Object) => {
  console.log('ME AUTH -> ', currentUser);
  return (
    <div>
      <h2>This is the Me Page</h2>
      <p>
        {currentUser.createdOn || 'Created on Placeholder'}
        <br />
        {currentUser.displayName || 'Placeholder me name'}
        <br />
        {currentUser.story || 'Placeholder for user story'}
      </p>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(Me);
