// @flow

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import appAuth from './helpers/appAuth';

const AuthButton = withRouter(
  ({ history }) =>
    appAuth.isAuthenticated
      ? <Button
          onClick={() => {
            appAuth.signout();
            history.push('/');
          }}
        >
          Logout
        </Button>
      : <Link to="/login">
          <Button>Login</Button>
        </Link>
);

export default AuthButton;
