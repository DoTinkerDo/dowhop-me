// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderMergedProps from '../helpers/renderMergedProps';
// import appAuth from '../helpers/appAuth';

const PrivateRoute = ({ component, redirectTo, auth, ...rest }: Object) => {
  console.log('PRIVATE ROUTE ->', auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={routeProps =>
        auth.isAuthenticated
          ? renderMergedProps(component, routeProps, rest)
          : <Redirect
              to={{
                pathname: redirectTo,
                state: { from: routeProps.location }
              }}
            />}
    />
  );
};

// export default PrivateRoute;

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
