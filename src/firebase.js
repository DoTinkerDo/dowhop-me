import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const config = {
  apiKey: 'AIzaSyCy35qz69Hu51oSIiwdAOjeG_zBVnbMBFY',
  authDomain: 'dowhop-with-reactjs.firebaseapp.com',
  databaseURL: 'https://dowhop-with-reactjs.firebaseio.com',
  projectId: 'dowhop-with-reactjs',
  storageBucket: 'dowhop-with-reactjs.appspot.com',
  messagingSenderId: '26660199955'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const ui = new firebaseui.auth.AuthUI(auth);
export const storage = firebase.storage();
export const messaging = firebase.messaging();
