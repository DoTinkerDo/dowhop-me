import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const config = {
  apiKey: 'AIzaSyCds_tiUvgDETcaagZ4C3tFZfLLLK8Wuf8',
  authDomain: 'dowhop-me.firebaseapp.com',
  databaseURL: 'https://dowhop-me.firebaseio.com',
  projectId: 'dowhop-me',
  storageBucket: 'dowhop-me.appspot.com',
  messagingSenderId: '212713898498'

  // johann test db creds ->
  // apiKey: 'AIzaSyCy35qz69Hu51oSIiwdAOjeG_zBVnbMBFY',
  // authDomain: 'dowhop-with-reactjs.firebaseapp.com',
  // databaseURL: 'https://dowhop-with-reactjs.firebaseio.com',
  // projectId: 'dowhop-with-reactjs',
  // storageBucket: 'dowhop-with-reactjs.appspot.com',
  // messagingSenderId: '26660199955'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const auth = firebase.auth();
export const storage = firebase.storage();
export const messaging = firebase.messaging();
