// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa0Zcm8jhTHE_cqKSfqdaW89iR6YWgQEg",
  authDomain: "fastfooddelivery-a893e.firebaseapp.com",
  projectId: "fastfooddelivery-a893e",
  storageBucket: "fastfooddelivery-a893e.appspot.com",
  messagingSenderId: "480605544607",
  appId: "1:480605544607:web:799582d94a3a4cb14602aa",
  measurementId: "G-F1YC78SCFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);