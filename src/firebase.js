// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpW3Q88MZ6ZL146zdyVFnm5k8c1PogQs",
  authDomain: "my-website-nireep.firebaseapp.com",
  projectId: "my-website-nireep",
  storageBucket: "my-website-nireep.appspot.com",
  messagingSenderId: "521543013990",
  appId: "1:521543013990:web:873ca897b87b8280947fa7",
  measurementId: "G-8076VJHERV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db};