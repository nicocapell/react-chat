
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt9_mNpGYz04othmAY449_moF5ngV5Xrg",
    authDomain: "react-chat-52d42.firebaseapp.com",
    databaseURL: "http://react-chat-52d42.firebaseio.com",
    projectId: "react-chat-52d42",
    storageBucket: "react-chat-52d42.appspot.com",
    messagingSenderId: "978673160504",
    appId: "1:978673160504:web:9fa9edc3a1d8e3295471cd",
    measurementId: "G-FY7ST8LRN5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };