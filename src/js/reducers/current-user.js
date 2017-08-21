export default function currentUserReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        displayName: action.displayName,
        story: action.story,
        createdOn: action.createdOn,
        uid: action.uid,
        email: action.email,
        photoURL: action.photoURL
      };
    default:
      return state;
  }
}
