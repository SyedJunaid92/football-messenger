// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYfWu3V_KqyCZc-j22_twS4BWPRuXaho",
  authDomain: "react-messenger-61248.firebaseapp.com",
  projectId: "react-messenger-61248",
  storageBucket: "react-messenger-61248.appspot.com",
  messagingSenderId: "259101341484",
  appId: "1:259101341484:web:8fb907e2834a8a99d05e89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
