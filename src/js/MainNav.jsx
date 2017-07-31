// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () =>
  <nav>
    <Link to="/">
      <h2 className="text-center">DoWhop (home)</h2>
    </Link>
    <h3 className="text-center">Main Nav</h3>
    <ul>
      <li>
        <Link to="/about">About</Link>
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
