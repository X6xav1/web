// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwMTBwwKHt6JAXRAIJqpMBrlTfzbjLxF8",
  authDomain: "x6web-4ac14.firebaseapp.com",
  projectId: "x6web-4ac14",
  storageBucket: "x6web-4ac14.appspot.com",
  messagingSenderId: "341938654296",
  appId: "1:341938654296:web:d52d64d983a7ac45214e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
