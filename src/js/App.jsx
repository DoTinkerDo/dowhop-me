// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthButton from './AuthButton';
import Wrapper from './Wrapper';
import Landing from './Landing';
import MainNav from './MainNav';
import PrivateRoute from './PrivateRoute';
import PropsRoute from './PropsRoute';
import Login from './Login';
import About from './About';
import Me from './Me';
import Profile from './Profile';
import FourOhFour from './FourOhFour';

class App extends React.Component {
  state = {
    user: {}
  };

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
          <Route path="/about" component={About} />
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
