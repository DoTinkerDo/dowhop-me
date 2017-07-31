// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import appAuth from './appAuth';

const AuthButton = withRouter(
  ({ history }) =>
    appAuth.isAuthenticated
      ? <p>
          Welcome!{' '}
          <Button
            onClick={() => {
              appAuth.signout(() => history.push('/'));
            }}
          >
            Log out
          </Button>
        </p>
      : <p>You are not logged in.</p>
);

export default AuthButton;
