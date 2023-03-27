// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBdw3PxzlWFbwm9Gfe5t2-EfZynPQNt5A",
  authDomain: "react-netflix-clone-5df5a.firebaseapp.com",
  projectId: "react-netflix-clone-5df5a",
  storageBucket: "react-netflix-clone-5df5a.appspot.com",
  messagingSenderId: "999549219958",
  appId: "1:999549219958:web:eded1730f9e9613a395b57",
  measurementId: "G-E43B4JGRJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)