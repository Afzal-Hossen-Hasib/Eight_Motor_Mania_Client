// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJPRAr2Omg4n7xbKE_E2vg5mPM0ryVXpA",
  authDomain: "motor-mania-65f3c.firebaseapp.com",
  projectId: "motor-mania-65f3c",
  storageBucket: "motor-mania-65f3c.appspot.com",
  messagingSenderId: "283102313391",
  appId: "1:283102313391:web:0f357602aec2409af58d5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
