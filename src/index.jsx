// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './js/App';

require('./sass/main.scss');

// add only for testing
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./js/App', () => {
    renderApp();
  });
}
