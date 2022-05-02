// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNY83zqn8bPAef74DZgOyaG727vC93sE",
  authDomain: "motor-mania-4c6d3.firebaseapp.com",
  projectId: "motor-mania-4c6d3",
  storageBucket: "motor-mania-4c6d3.appspot.com",
  messagingSenderId: "82108310581",
  appId: "1:82108310581:web:d877a9b05883950e0b7d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;