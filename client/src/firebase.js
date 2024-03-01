// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-ac181.firebaseapp.com",
  projectId: "ecommerce-ac181",
  storageBucket: "ecommerce-ac181.appspot.com",
  messagingSenderId: "240728718759",
  appId: "1:240728718759:web:67df5e9c59a9a3b4b74a82",
  measurementId: "G-HPDW9D7T25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
