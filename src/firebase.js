import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  // apiKey: "AIzaSyA-7rQH4HA1DC0yUpHAhEY1sYKaatPJMNQ",
  // authDomain: "react-firebase-crud-2d065.firebaseapp.com",
  // databaseURL: "https://react-firebase-crud-2d065.firebaseio.com",
  // projectId: "react-firebase-crud-2d065",
  // storageBucket: "react-firebase-crud-2d065.appspot.com",
  // messagingSenderId: "366113496238",
  // appId: "1:366113496238:web:01c48c92a222813521613f",
  apiKey: "AIzaSyDM5WamObeawZx5Dh2uY9eT94PtKDoGef4",
  authDomain: "fb-crud-b134d.firebaseapp.com",
  projectId: "fb-crud-b134d",
  storageBucket: "fb-crud-b134d.appspot.com",
  messagingSenderId: "771865011186",
  appId: "1:771865011186:web:2509c448ad4b22ee47c16b"  
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();