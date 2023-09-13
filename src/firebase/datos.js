import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUpjoJqkOQT_kNLD5PH8w-n3PkdKq75Lw",
  authDomain: "base-de-datos-colombia-inkjet.firebaseapp.com",
  projectId: "base-de-datos-colombia-inkjet",
  storageBucket: "base-de-datos-colombia-inkjet.appspot.com",
  messagingSenderId: "99967939886",
  appId: "1:99967939886:web:40009fceb9c4814bce76bf"
};


initializeApp(firebaseConfig);
const db = getFirestore();
export default db
