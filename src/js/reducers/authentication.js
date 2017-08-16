export default function authReducer(state = 'ANONYMOUS', action) {
  console.log('CALLED WITH -> ', action.type);
  switch (action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE'
      };
    case 'ATTEMPTING_LOGOUT':
      return {
        status: 'AWAITING_LOGOUT_AUTH_RESPONSE'
      };
    case 'LOGOUT':
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null,
        isAuthenticated: false
      };
    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        email: action.email,
        displayName: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
}