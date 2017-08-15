// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import renderMergedProps from '../helpers/renderMergedProps';
import appAuth from '../helpers/appAuth';

const PrivateRoute = ({ component, redirectTo, ...rest }: Object) =>
  <Route
    {...rest}
    render={routeProps =>
      appAuth.isAuthenticated
        ? renderMergedProps(component, routeProps, rest)
        : <Redirect
            to={{
              pathname: redirectTo,
              state: { from: routeProps.location }
            }}
          />}
  />;

export default PrivateRoute;
