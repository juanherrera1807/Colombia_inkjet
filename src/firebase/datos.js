import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8iQWDt58Y186LnKbRcJB8HTesmT86F8Q",
  authDomain: "colombia-inkjet.firebaseapp.com",
  projectId: "colombia-inkjet",
  storageBucket: "colombia-inkjet.appspot.com",
  messagingSenderId: "409470096319",
  appId: "1:409470096319:web:a0b4a1312abb12290a470a"
};


initializeApp(firebaseConfig);
const db = getFirestore();
export default db
