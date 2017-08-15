import { auth, database, ui } from '../../firebase';
import { addUser } from '.';

export const login = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(loggedIn(user));
      dispatch(addUser(user));
    });
    setTimeOut(() => {
      dispatch(loggedIn());
    }, 2000);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGOUT' });
    setTimeOut(() => {
      auth.signOut().then(() => {
        dispatch(loggedOut());
      });
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

export const startListeningToAuthChanges = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(loggedIn(user));
      } else {
        dispatch(loggedOut());
      }
    });
  };
};
