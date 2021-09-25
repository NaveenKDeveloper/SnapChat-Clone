import firebase from  "firebase/compat";

const firebaseConfig = {
  // add your config from firebase
};

const firebaseApp= firebase.initializeApp(firebaseConfig) // created
const db = firebaseApp.firestore(); // making it accessible connecting it
const auth=firebase.auth() //authentication
const storage=firebase.storage() //access to storage to upload stuffs
const provider= new firebase.auth.GoogleAuthProvider() // google authentication popup page when clicked login

export {db, auth, storage, provider};
