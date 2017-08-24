// @flow

import React from 'react';
import { Button, Col, FormControl, Row, Thumbnail } from 'react-bootstrap';
import injectSheet from 'react-jss';
import LoadingDots from './LoadingDots';

const styles = {
  margin: {
    marginTop: '1%'
  }
};

const CurrentUser = (props: {
  user: Object,
  value: string,
  profile: Object,
  handleChange: Function,
  handleSubmit: Function,
  classes: Object
}) => {
  const { user, value, profile, handleChange, handleSubmit, classes } = props;
  return (
    <Row>
      <Col xs={12} md={6}>
        {!user.photoURL && <LoadingDots />}
        <Thumbnail src={user.photoURL} alt={`headshot for ${user.story}`}>
          <h3>
            {user.displayName}
          </h3>
          <p>
            {profile.story || 'Your story'}
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
          <FormControl type="text" value={value} placeholder="Enter your story" onChange={handleChange} />
          <Button onClick={e => handleSubmit(e, value, user.uid)} className={classes.margin}>
            {/* Q: alternatives to inline func? Perf issues? */}
            Save
          </Button>
        </Thumbnail>
      </Col>
    </Row>
  );
};

export default injectSheet(styles)(CurrentUser);
