import firebase from "firebase/app";
import "firebase/database";

const apis = {
  apiKey: "AIzaSyA1brFAEGJB2DGMlL0N683YWk7ge0WHLKA",
  authDomain: "finalexam-241506.firebaseapp.com",
  databaseURL: "https://finalexam-241506.firebaseio.com",
  projectId: "finalexam-241506",
  storageBucket: "finalexam-241506.appspot.com",
  messagingSenderId: "32148476963",
  appId: "1:32148476963:web:65a3862224732130"
};

firebase.initializeApp(apis);

export default firebase;
