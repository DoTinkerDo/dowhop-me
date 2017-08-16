// import { auth, database, authUI } from '../../firebase';
// import { addUser } from './users';
import { auth } from '../../firebase';

const loggedIn = user => ({
  type: 'LOGIN',
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  uid: user.uid,
  isAuthenticated: true
});

const loggedOut = () => ({
  type: 'LOGOUT'
});

export const login = () => dispatch => {
  dispatch({ type: 'ATTEMPTING_LOGIN' });
  // auth.signInWithPopup(googleAuthProvider);
};

export const logout = () => dispatch => {
  dispatch({ type: 'ATTEMPTING_LOGOUT' });
  auth.signOut();
};

export const startListeningToAuthChanges = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(loggedIn(user));
    } else {
      dispatch(loggedOut());
    }
  });
};
