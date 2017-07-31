// @flow

import React from 'react';
// import moment from 'moment';
// import SignIn from './SignIn';
// import LoadingDots from './LoadingDots';
// import CurrentUser from './CurrentUser';
// import { database, auth } from '../firebase';

const Landing = () =>
  <div>
    <h2 className="text-center">Welcome to DoWhop</h2>
    <h3 className="text-center">Landing page</h3>
  </div>;

// class Landing extends Component {
//   state = {
//     currentUser: null,
//     isLoading: true,
//     user: null,
//     value: ''
//   };

//   componentDidMount() {
//     auth.onAuthStateChanged(user => {
//       if (user) {
//         this.setState({ user });
//         const appUserRef = this.appUsersRef.child(user.uid);

//         appUserRef.once('value').then(snapshot => {
//           if (snapshot.val()) return;
//           const date = moment().toDate();
//           const userData = {
//             createdOn: date,
//             displayName: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL || `/src/images/profile-placeholder.png`,
//             uid: user.uid
//           };
//           appUserRef.update(userData);
//         });

//         appUserRef.on('value', snapshot => {
//           this.setState({
//             currentUser: snapshot.val(),
//             isLoading: false
//           });
//         });
//       } else {
//         this.setState({
//           currentUser: null,
//           isLoading: true,
//           user: null
//         });
//       }
//     });
//   }

//   componentWillUnmount() {
//     // TODO this needs to be set to the correct child ref
//     this.appUsersRef.off();
//   }

//   handleChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (uid: string) => {
//     const appUserRef = this.appUsersRef.child(uid);
//     appUserRef.update({ nickname: this.state.value });
//     this.setState({ value: '' });
//   };

//   appUsersRef = database.ref('appUsers');

//   render() {
//     const { currentUser, isLoading, user, value } = this.state;
//     return (
//       <div>
//         {!user && <SignIn />}
//         {user && isLoading && <LoadingDots />}
//         {currentUser &&
//           <CurrentUser
//             user={currentUser}
//             value={value}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//           />}
//       </div>
//     );
//   }
// }

export default Landing;
