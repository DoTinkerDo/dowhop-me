// @flow

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const MainNav = () =>
  <Row>
    <nav>
      <Link to="/">
        <h2 className="text-center">DoWhop</h2>
      </Link>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dowhops">DoWhops</NavLink>
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

export default MainNav;
