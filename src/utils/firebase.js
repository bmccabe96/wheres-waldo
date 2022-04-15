// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcXpFP7E9UMWI0uLLri1SZvP08eZ9nut4",
  authDomain: "wheres-waldo-be79f.firebaseapp.com",
  projectId: "wheres-waldo-be79f",
  storageBucket: "wheres-waldo-be79f.appspot.com",
  messagingSenderId: "330027327865",
  appId: "1:330027327865:web:3710cc5d84575f1f128fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;