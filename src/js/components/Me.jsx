// @flow

import React from 'react';
import { connect } from 'react-redux';

const Me = ({ auth }: Object) => {
  console.log('ME AUTH -> ', auth.status);
  return (
    <div>
      <h2>This is the Me Page</h2>
      <p>
        {auth.status}
        <br />
        {auth.displayName || 'Placeholder me name'}
      </p>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Me);
