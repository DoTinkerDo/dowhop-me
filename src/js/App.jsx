// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import Landing from './Landing';
import FourOhFour from './FourOhFour';
// import SignIn from './SignIn';
// import LoadingDots from './LoadingDots';
// import CurrentUser from './CurrentUser';
// import DoWhop from './DoWhop';
// import { database, auth } from '../firebase';

const App = () =>
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Router>;

export default App;

// class App extends Component {
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
//           const date = new Date();
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
//       <Wrapper>
//         <DoWhop />
//         {!user && <SignIn />}
//         {user && isLoading && <LoadingDots />}
//         {currentUser &&
//           <CurrentUser
//             user={currentUser}
//             value={value}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//           />}
//       </Wrapper>
//     );
//   }
// }

// export default App;
