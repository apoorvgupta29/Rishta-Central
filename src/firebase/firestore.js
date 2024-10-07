import { collection, doc, getDoc, getDocs, addDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from './config';

export const getProfiles = async () => {
  const querySnapshot = await getDocs(collection(db, 'profiles'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProfileById = async (email) => {
  const docRef = doc(db, 'profiles', email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Profile not found');
  }
};

export const getProfileByEmail = async (email) => {
  const docRef = doc(db, 'profiles', email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
};

export const createProfile = async (email, profileData) => {
  const docRef = doc(db, 'profiles', email);
  await setDoc(docRef, {
    ...profileData,
    createdAt: new Date().toISOString(),
  }, { merge: true });
};

export const createProfileWithoutAuth = async (profileData) => {
  try {
    const docRef = await addDoc(collection(db, 'profiles'), {
      ...profileData,
      createdAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
};

export const updateProfile = async (profileId, profileData) => {
  const docRef = doc(db, 'profiles', profileId);
  await updateDoc(docRef, profileData);
};