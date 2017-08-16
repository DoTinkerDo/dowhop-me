// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
// import injectSheet from 'react-jss';

// const styles = {
//   pullRight: {
//     float: 'right !important',
//     marginBottom: '2%'
//   }
// };

const AuthButton = withRouter(({ history, authentication }) => {
  console.log('AUTHBUTTON ->', authentication.isAuthenticated);
  return (
    <Row>
      {authentication.isAuthenticated
        ? <Button
            onClick={() => {
              history.push('/');
            }}
          >
            Logout
          </Button>
        : <Link to="/login">
            <Button>Login</Button>
          </Link>}
    </Row>
  );
});

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(AuthButton);
