import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import PropTypes from 'prop-types';

function App() {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <div className="site-content">
            <div className="site-main">
              <p>A bunch of paragraph text goes here.</p>
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
              <blockquote>I am a blockquote</blockquote>
              <pre>pre stuff goes here</pre>
              <code>code stuff goes here</code>
              <big>big stuff goes here</big>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

// App.propTypes = {
//   message: PropTypes.string.isRequired
// };

export default App;
