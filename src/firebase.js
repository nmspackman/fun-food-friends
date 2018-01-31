// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDU6tyNATkbqRVDm3O_iv34KKsnYGL9B9I",
  authDomain: "fun-food-friends-f51d2.firebaseapp.com",
  databaseURL: "https://fun-food-friends-f51d2.firebaseio.com",
  projectId: "fun-food-friends-f51d2",
  storageBucket: "",
  messagingSenderId: "405850853442"
};
firebase.initializeApp(config);
export default firebase;