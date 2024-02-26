// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5IoTZ4h63MuE7aHfhWuFPbkJa_xW-yEk",
    authDomain: "ecommerce-b79f0.firebaseapp.com",
    projectId: "ecommerce-b79f0",
    storageBucket: "ecommerce-b79f0.appspot.com",
    messagingSenderId: "431042140287",
    appId: "1:431042140287:web:62f1efdf2ba4a72753c74a"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();