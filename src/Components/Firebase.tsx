// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZ6WdSKagHRshDi2lUSpp9ZhcvQ0tmpc",
  authDomain: "todo-878c7.firebaseapp.com",
  databaseURL: "https://todo-878c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-878c7",
  storageBucket: "todo-878c7.appspot.com",
  messagingSenderId: "1083432781948",
  appId: "1:1083432781948:web:b1be64ded2fca6bbe3e1f9",
  measurementId: "G-H92YD590R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();