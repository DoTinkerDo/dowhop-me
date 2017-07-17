import { database, messaging } from './firebase';

export default function registerMessaging(user) {
  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then(token => database.ref('app_users').child(user.uid).child('token').set(token))
    .catch(error => 'FCM TOKEN ERROR: -> ', console.error);
}

messaging.onMessage(payload => console.log('ONMESSAGE: -> ', payload));

// export default function(user) {
//   messaging
//     .requestPermission()
//     .then(() => messaging.getToken())
//     .then(token => {
//       database.ref('users').child(user.uid).child('token').set(token);
//       messaging.onMessage(console.log);
//     })
//     .catch(console.error);
// }
