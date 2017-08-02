// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import appAuth from './appAuth';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

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
