import React from 'react';
import { render } from 'react-dom';
import App from './js/App';

require('./sass/main.scss');

const renderApp = () => {
  render(<App message="Hello, world!" />, document.getElementById('root'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./js/App', () => {
    renderApp();
  });
}
