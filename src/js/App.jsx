// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import MainNav from './MainNav';
import Landing from './Landing';
import HowItWorks from './HowItWorks';
import Me from './Me';
import FourOhFour from './FourOhFour';

const App = () =>
  <Router>
    <Wrapper>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/me" component={Me} />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Router>;

export default App;
