import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCaibSygOh7Gz5F0ZoZRvwwR_QpawF8vg0",
  authDomain: "react-portfolio-dashboar-f5a17.firebaseapp.com",
  projectId: "react-portfolio-dashboar-f5a17",
  storageBucket: "react-portfolio-dashboar-f5a17.appspot.com",
  messagingSenderId: "146482255235",
  appId: "1:146482255235:web:8b5fe8f76a2245e19d52b6",
  measurementId: "G-NZH63VC0FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);