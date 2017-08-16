// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
// import injectSheet from 'react-jss';
// import appAuth from '../helpers/appAuth';

// const styles = {
//   pullRight: {
//     float: 'right !important',
//     marginBottom: '2%'
//   }
// };

const AuthButton = withRouter(({ history, auth }) => {
  console.log('AUTHBUTTON ->', auth.isAuthenticated);
  return (
    <Row>
      {auth.isAuthenticated
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

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(AuthButton);

// export default injectSheet(styles)(AuthButton);
