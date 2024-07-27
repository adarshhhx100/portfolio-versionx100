// firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCavG-Bnvca9hitdyxxD7xf_tN5eWkVQyM",
  authDomain: "portfolio100x.firebaseapp.com",
  databaseURL: "https://portfolio100x-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio100x",
  storageBucket: "portfolio100x.appspot.com",
  messagingSenderId: "453187512473",
  appId: "1:453187512473:web:080917ceef5685cec8f008",
  measurementId: "G-MEYEWEVPPB"
};

// Check if Firebase apps have already been initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const database = getDatabase(app);

export { database };

