// @flow

import React from 'react';
import { Button, Col, FormControl, Row, Thumbnail } from 'react-bootstrap';
import { auth } from '../firebase';

const CurrentUser = (props: { user: Object, value: string, handleChange: Function, handleSubmit: Function }) => {
  const { user, value, handleChange, handleSubmit } = props;
  return (
    <Row>
      <Col xs={12} md={6}>
        <Thumbnail src={user.photoURL} alt={`headshot for ${user.displayName}`}>
          <h3>
            {user.displayName}
          </h3>
          <p>
            {user.nickname || 'Your nickname'}
          </p>
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
          <FormControl type="text" value={value} placeholder="Enter your nickname" onChange={handleChange} />
          <Button onClick={() => handleSubmit(user.uid)}>Save</Button>
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
