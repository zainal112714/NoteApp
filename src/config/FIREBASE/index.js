import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyD34HZVyC38jNu8z_NQhP0hUDLthu90O-c",
    authDomain: "terserah-61440.firebaseapp.com",
    databaseURL: "https://terserah-61440-default-rtdb.firebaseio.com",
    projectId: "terserah-61440",
    storageBucket: "terserah-61440.appspot.com",
    messagingSenderId: "863650144832",
    appId: "1:863650144832:web:4f2e9f5e5b3f9eab5a75a5"
});

const FIREBASE = firebase;

export default FIREBASE;