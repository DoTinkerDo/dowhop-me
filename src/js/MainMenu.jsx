// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () =>
  <nav>
    <h1>Main App Navigation</h1>
    <ul>
      <li>
        <Link to="/howitworks">How It Works</Link>
      </li>
      <li>
        <Link to="/">DoWhops</Link>
      </li>
      <li>
        <Link to="/">Me</Link>
      </li>
      <li>
        <Link to="/">My Profile</Link>
      </li>
    </ul>
  </nav>;

export default MainMenu;
