// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () =>
  <nav>
    <Link to="/">
      <h1 className="text-center">Main App Navigation</h1>
    </Link>
    <ul>
      <li>
        <Link to="/howitworks">How It Works</Link>
      </li>
      <li>
        <Link to="/dowhops">DoWhops</Link>
      </li>
      <li>
        <Link to="/me">Me</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </nav>;

export default MainNav;
