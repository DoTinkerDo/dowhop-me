// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import MainNav from './MainNav';
import Landing from './Landing';
import About from './About';
import FourOhFour from './FourOhFour';

const App = () =>
  <Router>
    <Wrapper>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Router>;

export default App;
