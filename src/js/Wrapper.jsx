// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import injectSheet from 'react-jss';

const styles = {
  background: {
    backgroundColor: '#e9e9e9'
  }
};

const Wrapper = ({ classes, children }: Object) =>
  <Grid className={classes.background}>
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

export default injectSheet(styles)(Wrapper);
