// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv46a20jGr5LYwhg8XGLPBEUIEC5pEVvc",
  authDomain: "tgv-schichten.firebaseapp.com",
  projectId: "tgv-schichten",
  storageBucket: "tgv-schichten.appspot.com",
  messagingSenderId: "883949900900",
  appId: "1:883949900900:web:cce60f187d1040ef69bb71",
  measurementId: "G-T6YF3GWENF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);