// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2WTQEnVg2UOFZIqrFc5VWuKtptWmqm_I",
  authDomain: "react-apple-app-68ca8.firebaseapp.com",
  projectId: "react-apple-app-68ca8",
  storageBucket: "react-apple-app-68ca8.firebasestorage.app",
  messagingSenderId: "55230823890",
  appId: "1:55230823890:web:437dfdc735894d718d9c0b",
  //measurementId: "G-4LHPTF8PYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;