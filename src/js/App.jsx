import React from 'react';
import PropTypes from 'prop-types';

function App({ message }) {
  return (
    <div>
      {message}
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
