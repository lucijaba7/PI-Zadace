import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAZ9mIDTlu9UU6dL-MwAMNrKchIADYwclo",
    authDomain: "fipugram-558d7.firebaseapp.com",
    projectId: "fipugram-558d7",
    storageBucket: "fipugram-558d7.appspot.com",
    messagingSenderId: "81175905612",
    appId: "1:81175905612:web:3ff8dd53f657334bda7be9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };