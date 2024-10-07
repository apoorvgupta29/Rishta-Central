import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAi8q2sb_cnYBQvcaDQnnJwe3LURgr-20o",
  authDomain: "rishta-central.firebaseapp.com",
  projectId: "rishta-central",
  storageBucket: "rishta-central.appspot.com",
  messagingSenderId: "787481180171",
  appId: "1:787481180171:web:a11ead2ad35703441f6f0e",
  measurementId: "G-XJ357FJD4Z"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const db = getFirestore(app);

export const User = collection(db, "Users");
