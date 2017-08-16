// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Wrapper from './Wrapper';
import Landing from './Landing';
import MainNav from './MainNav';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import PropsRoute from './PropsRoute';
import Login from './Login';
import Me from './Me';
import Profile from './Profile';
import FourOhFour from './FourOhFour';

import { startListeningToAuthChanges } from '../actions/authentication';

store.dispatch(startListeningToAuthChanges());

const App = () =>
  <Provider store={store}>
    <Wrapper>
      <AuthButton />
      <MainNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PropsRoute path="/login" component={Login} />
        <PrivateRoute path="/me" component={Me} redirectTo="/login" />
        <PrivateRoute path="/profile" component={Profile} redirectTo="/login" />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Provider>;

export default App;
