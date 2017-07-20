// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Wrapper = ({ children }: Object) =>
  <Grid>
    <Row>
      <Col md={12}>
        <div className="site-content">
          <div className="site-main">
            {children}
          </div>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Wrapper;
