import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCIwXRs2FB29TVif7Ix7KsaUVsFYXg-6gI",
    authDomain: "snapchat-clone-b1312.firebaseapp.com",
    projectId: "snapchat-clone-b1312",
    storageBucket: "snapchat-clone-b1312.appspot.com",
    messagingSenderId: "256254474715",
    appId: "1:256254474715:web:44c07d0c3d9e4d56ab8ffe"
  };

const firebaseApp= firebase.initalizeApp(firebaseConfig) // created
const db = firebaseApp.firestore(); // making it accessible connecting it
const auth=firebase.auth() //authentication
const storage=firebase.storage() //access to storage to upload stuffs
const provider= new firebase.auth.GoogleAuthProvider() // google authentication popup page when clicked login

export {db, auth, storage, provider};