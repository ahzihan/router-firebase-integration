// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4yoUs2kQ2kGZrzOzYDIjA4lpXnFAnIlY",
    authDomain: "router-firebase-integrat-a4706.firebaseapp.com",
    projectId: "router-firebase-integrat-a4706",
    storageBucket: "router-firebase-integrat-a4706.appspot.com",
    messagingSenderId: "1068733699594",
    appId: "1:1068733699594:web:2b235a5470470fede831f3"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export default app;