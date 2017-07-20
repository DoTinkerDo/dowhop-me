// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './js/App';

require('./sass/main.scss');
// import styles from './sass/main.scss';

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./js/App', () => {
    renderApp();
  });
}
