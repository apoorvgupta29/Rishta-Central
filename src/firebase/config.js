import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyAi8q2sb_cnYBQvcaDQnnJwe3LURgr-20o",
  // authDomain: "rishta-central.firebaseapp.com",
  // projectId: "rishta-central",
  // storageBucket: "rishta-central.appspot.com",
  // messagingSenderId: "787481180171",
  // appId: "1:787481180171:web:a11ead2ad35703441f6f0e",
  // measurementId: "G-XJ357FJD4Z"
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


