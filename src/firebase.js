import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBHEk0grqGbbtG2y8dmgBuLK1yMTCGVIxE",
  authDomain: "udemy-d3-firebase-7b6b9.firebaseapp.com",
  databaseURL: "https://udemy-d3-firebase-7b6b9.firebaseio.com",
  projectId: "udemy-d3-firebase-7b6b9",
  storageBucket: "udemy-d3-firebase-7b6b9.appspot.com",
  messagingSenderId: "18753953254",
  appId: "1:18753953254:web:bab7d717bcc278da030a27",
  measurementId: "G-CYSL3MMV5D"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore());
