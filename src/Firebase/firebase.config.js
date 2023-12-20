// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFAK5jjZW1AzgasLUt_ZNNqWKxwAr7GO0",
  authDomain: "task-mangement-tasky.firebaseapp.com",
  projectId: "task-mangement-tasky",
  storageBucket: "task-mangement-tasky.appspot.com",
  messagingSenderId: "1007220438336",
  appId: "1:1007220438336:web:f907df10ae61abbed1b6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;