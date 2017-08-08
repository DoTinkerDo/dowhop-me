// @flow

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import injectSheet from 'react-jss';
import appAuth from './helpers/appAuth';

const styles = {
  pullRight: {
    float: 'right !important'
  }
};

const AuthButton = withRouter(
  ({ history, classes }) =>
    appAuth.isAuthenticated
      ? <Button
          className={classes.pullRight}
          onClick={() => {
            appAuth.signout();
            history.push('/');
          }}
        >
          Logout
        </Button>
      : <Link to="/login">
          <Button className={classes.pullRight}>Login</Button>
        </Link>
);

export default injectSheet(styles)(AuthButton);
