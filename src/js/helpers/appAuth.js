import { auth } from '../../firebase';

const appAuth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
    auth.signOut();
  }
};

export default appAuth;
