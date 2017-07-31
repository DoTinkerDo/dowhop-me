// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Wrapper from './Wrapper';
import Landing from './Landing';
import MainNav from './MainNav';
import Login from './Login';
import About from './About';
import Me from './Me';
import Profile from './Profile';
import FourOhFour from './FourOhFour';
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

const PrivateRoute = ({ component: Component, ...rest }) =>
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

const App = () =>
  <Router>
    <Wrapper>
      <AuthButton />
      <MainNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/me" component={Me} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Router>;

export default App;
