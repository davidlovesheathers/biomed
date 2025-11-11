// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ4PJ2H9DcwkPX0OzPLDG8SMOL2MVEoj0",
  authDomain: "biomedweb.firebaseapp.com",
  projectId: "biomedweb",
  storageBucket: "biomedweb.firebasestorage.app",
  messagingSenderId: "112897214657",
  appId: "1:112897214657:web:ce23d920e68bc54a506c40",
  measurementId: "G-NMZ8B0KM25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);