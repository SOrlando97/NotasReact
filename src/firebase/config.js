import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyA2ZEiBErjejROwrbS24GNIG-hWkWUQIs8",
  authDomain: "reactprueba-bd962.firebaseapp.com",
  projectId: "reactprueba-bd962",
  storageBucket: "reactprueba-bd962.appspot.com",
  messagingSenderId: "1072883872780",
  appId: "1:1072883872780:web:7479a0a4d163fc1f2e2a29"
};


export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth ( Firebaseapp );
export const FirebaseDBh = getFirestore ( Firebaseapp);