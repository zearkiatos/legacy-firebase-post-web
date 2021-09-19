// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import config from './src/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE.API_KEY,
  authDomain: config.FIREBASE.AUTH_DOMAIN,
  databaseURL: config.FIREBASE.DATABASE_URL,
  projectId: config.FIREBASE.PROJECT_ID,
  storageBucket: config.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.MESSAGING_SENDER_ID,
  appId: config.FIREBASE.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);