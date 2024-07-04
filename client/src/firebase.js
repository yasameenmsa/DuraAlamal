// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "duraalama.firebaseapp.com",
  projectId: "duraalama",
  storageBucket: "duraalama.appspot.com",
  messagingSenderId: "338794211650",
  appId: "1:338794211650:web:5a994b5168a1763ea780db",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
