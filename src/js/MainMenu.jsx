// @flow

import React from 'react';
import injectSheet from 'react-jss';
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
        <Link to="/me">Me</Link>
      </li>
      <li>
        <Link to="/">My Profile</Link>
      </li>
    </ul>
  </nav>;

// export default MainMenu;
export default injectSheet(styles)(MainMenu);
