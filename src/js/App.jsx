// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from '../firebase';
import appAuth from './helpers/appAuth';
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

class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        appAuth.authenticate();
        this.setState({ user });
      } else {
        this.setState({ user: {} });
      }
    });
  }

  updateUser = (user: Object) => {
    this.setState({ user });
  };

  render() {
    return (
      <Wrapper>
        <AuthButton />
        <MainNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PropsRoute path="/login" component={Login} updateUser={this.updateUser} />
          <PrivateRoute path="/me" component={Me} redirectTo="/login" user={this.state.user} />
          <PrivateRoute path="/profile" component={Profile} redirectTo="/login" user={this.state.user} />
          <Route component={FourOhFour} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
