// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwx6evRE8wg6IpdXePpjCNLkt-imjmYNk",
  authDomain: "assignment-10-ac3fc.firebaseapp.com",
  projectId: "assignment-10-ac3fc",
  storageBucket: "assignment-10-ac3fc.appspot.com",
  messagingSenderId: "72620890514",
  appId: "1:72620890514:web:08e2cccbdd5510d52e894b",
  measurementId: "G-3REKKYRPZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


