// @flow

import { auth, database } from '../../firebase';

const addCurrentUser = user => ({
  type: 'ADD_USER',
  displayName: user.displayName,
  createdOn: user.createdOn,
  uid: user.uid,
  email: user.email,
  photoURL: user.photoURL
});

const startListeningForCurrentUser = () => (dispatch: Function) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const userRef = database.ref('appUsers').child(user.uid);
      userRef.on('value', snapshot => {
        const appUser = snapshot.val();
        dispatch(addCurrentUser(appUser));
      });
    }
  });
};

export default startListeningForCurrentUser;
