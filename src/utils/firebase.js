// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL5iiBPMiqdYWbLPM6xsiwmNmQRqbfSaQ",
  authDomain: "netflixgpt-82692.firebaseapp.com",
  projectId: "netflixgpt-82692",
  storageBucket: "netflixgpt-82692.firebasestorage.app",
  messagingSenderId: "993607691505",
  appId: "1:993607691505:web:472e75c8bd6109df2b4d50",
  measurementId: "G-PZPL7BGXMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();