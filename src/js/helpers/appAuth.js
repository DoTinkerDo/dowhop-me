import { auth } from '../../firebase';

const appAuth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout(cb) {
    this.isAuthenticated = false;
    auth.signOut();
    cb();
  }
};

export default appAuth;
