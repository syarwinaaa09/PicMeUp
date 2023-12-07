// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Vt5CETofPShbTPSf3-iVj8HA6vnMTk0",
  authDomain: "picmeup-416e9.firebaseapp.com",
  projectId: "picmeup-416e9",
  storageBucket: "picmeup-416e9.appspot.com",
  messagingSenderId: "942884497971",
  appId: "1:942884497971:web:221e949fbd0c74ccf99146"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };