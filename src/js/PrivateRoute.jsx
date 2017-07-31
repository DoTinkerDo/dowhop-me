// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import appAuth from './appAuth';

const PrivateRoute = ({ component: Component, ...rest }: Object) =>
  <Route
    {...rest}
    render={props =>
      appAuth.isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />;

export default PrivateRoute;
