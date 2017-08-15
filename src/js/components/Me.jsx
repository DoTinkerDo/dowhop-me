// @flow

import React from 'react';

const Me = ({ user }: Object) =>
  <div>
    <h2>This is the Me Page</h2>
    <p>
      {user.uid}
    </p>
  </div>;

export default Me;
