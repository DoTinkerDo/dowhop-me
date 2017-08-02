// @flow

import React from 'react';
// import moment from 'moment';
// import LoadingDots from './LoadingDots';
// import CurrentUser from './CurrentUser';
// import { database } from '../firebase';

const Profile = (props: Object) =>
  <div>
    <h2>This is the Profile Page</h2>
    <pre>
      <code>
        {JSON.stringify(props, null, 4)}
      </code>
    </pre>
  </div>;

// class Profile extends Component {
//   state = {
//     currentUser: null,
//     value: ''
//   };

//   componentDidMount() {
//     const appUserRef = this.appUsersRef.child();
//     appUserRef.on('value', snapshot => {
//       this.setState({
//         currentUser: snapshot.val()
//       });
//     });
//   }

//   // componentWillUnmount() {
//   // TODO this needs to be set to the correct child ref
//   // this.appUsersRef.off();
//   // }

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
//     return (
//       <div>
//         <h2>This is the Profile Page</h2>
//         <pre>
//           <code>
//             {JSON.stringify(this.state, null, 4)}
//           </code>
//         </pre>
//         <pre>
//           <code>
//             {JSON.stringify(this.props, null, 4)}
//           </code>
//         </pre>
//       </div>
//     );
//   }
// }

export default Profile;
