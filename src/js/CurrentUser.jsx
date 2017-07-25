// @flow

import React from 'react';
import { Button, Col, Row, Thumbnail } from 'react-bootstrap';
import { auth } from '../firebase';

const CurrentUser = (props: { user: Object }) => {
  const { user } = props;
  return (
    <Row>
      <Col xs={12} md={6}>
        <Thumbnail src={user.photoURL} alt={`headshot for ${user.displayName}`}>
          <h3>
            {user.displayName}
          </h3>
          <p>
            {user.email}
          </p>
          <p>
            <small>
              {user.uid}
            </small>
          </p>
          <p>
            <small>
              {user.createdOn}
            </small>
          </p>
          <p>
            <Button bsStyle="default" onClick={() => auth.signOut()}>
              Sign Out
            </Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  );
};

export default CurrentUser;
