import { auth, database, ui } from '../../firebase';

export const login = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    setTimeOut(() => {
      dispatch(loggedIn());
    }, 2000);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGOUT' });
    setTimeOut(() => {
      dispatch(loggedOut());
    }, 2000);
  };
};

const loggedIn = user => {
  return {
    type: 'LOGIN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const loggedOut = user => {
  return {
    type: 'LOGOUT'
  };
};
