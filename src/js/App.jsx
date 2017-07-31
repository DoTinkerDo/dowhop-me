// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthButton from './AuthButton';
import Wrapper from './Wrapper';
import Landing from './Landing';
import MainNav from './MainNav';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import About from './About';
import Me from './Me';
import Profile from './Profile';
import FourOhFour from './FourOhFour';

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
