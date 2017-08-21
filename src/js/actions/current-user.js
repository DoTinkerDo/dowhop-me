import { auth, database } from '../../firebase';

const addCurrentUser = user => ({
  type: 'ADD_USER',
  displayName: user.displayName,
  story: user.story,
  createdOn: user.createdOn,
  uid: user.uid,
  email: user.email,
  photoURL: user.photoURL
});

const startListeningForCurrentUser = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const userRef = database.ref('appUsers').child(user.uid);
      userRef.on('value', snapshot => {
        dispatch(addCurrentUser(snapshot.val()));
      });
    }
  });
};

export default startListeningForCurrentUser;
