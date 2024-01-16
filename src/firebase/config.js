// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlM3fX8g6_5Kp1pCGXiXj65eGduTBjZJQ",
  authDomain: "coderreact-4b0b8.firebaseapp.com",
  projectId: "coderreact-4b0b8",
  storageBucket: "coderreact-4b0b8.appspot.com",
  messagingSenderId: "549764642263",
  appId: "1:549764642263:web:3ee0c33d2ed22a603bc792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);