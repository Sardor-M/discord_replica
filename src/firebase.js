// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8s3DIox0Ccn5YAgoBs8gRP6hpwDeumL0",
  authDomain: "discord-clone-fb7e0.firebaseapp.com",
  databaseURL:
    "https://discord-clone-fb7e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "discord-clone-fb7e0",
  storageBucket: "discord-clone-fb7e0.appspot.com",
  messagingSenderId: "706206888935",
  appId: "1:706206888935:web:ebd9491b89ce3df373c342",
  measurementId: "G-8M7V6N44RG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
