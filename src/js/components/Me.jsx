// @flow

import React from 'react';
import { connect } from 'react-redux';

const Me = ({ authentication }: Object) => {
  console.log('ME AUTH -> ', authentication.status);
  return (
    <div>
      <h2>This is the Me Page</h2>
      <p>
        {authentication.status}
        <br />
        {authentication.displayName || 'Placeholder me name'}
      </p>
    </div>
  );
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Me);
