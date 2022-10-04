  // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB087cJ35e-oUmXWR37_S7xJR1t0YZBtBs",
    authDomain: "regenfund.firebaseapp.com",
    projectId: "regenfund",
    storageBucket: "regenfund.appspot.com",
    messagingSenderId: "639798418658",
    appId: "1:639798418658:web:bcd80b702c19d94f0cd2bb",
    measurementId: "G-CN4E9E87J3",
};



// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default firebaseApp;
export { db, storage };
export const auth = getAuth();
