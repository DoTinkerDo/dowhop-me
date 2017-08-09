// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  margin: {
    marginBottom: '5%'
  }
};

const MainNav = ({ classes }: Object) =>
  <Row>
    <nav className={classes.margin}>
      <ul>
        <li>
          <a href="https://www.dowhop.com/howitworks">How it Works</a>
        </li>
        <li>
          <a href="https://www.dowhop.com/explore">DoWhops</a>
        </li>
        <li>
          <NavLink to="/me">Me</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  </Row>;

export default injectSheet(styles)(MainNav);
