import firebase from 'firebase'
import 'firebase/storage'


require("firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyA-T8pLf1WHQeyQlR3TYVVsxuD5Fu7ymp0",
    authDomain: "techblogger555.firebaseapp.com",
    databaseURL: "https://techblogger555.firebaseio.com",
    projectId: "techblogger555",
    storageBucket: "techblogger555.appspot.com",
    messagingSenderId: "978596655519",
    appId: "1:978596655519:web:e971a8fdcd81f11c5c8daa"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();