  // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_APIKEY,
    authDomain: NEXT_PUBLIC_AUTHDOMAIN,
    projectId: NEXT_PUBLIC_PROJECTID,
    storageBucket: NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: NEXT_PUBLIC_MESSAGINSENDERID,
    appId: NEXT_PUBLIC_APPID,
    measurementId: NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
