/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJXnoYks0R3u86u1IbKmUKBg7Gje4Zx28",
  authDomain: "food-search-d9ee7.firebaseapp.com",
  projectId: "food-search-d9ee7",
  storageBucket: "food-search-d9ee7.appspot.com",
  messagingSenderId: "600931697760",
  appId: "1:600931697760:web:3105ec528a509d7ea46f05",
  measurementId: "G-9B3R37Y1FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
