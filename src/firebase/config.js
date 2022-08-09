import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBuaKjdC797cKAdLjGmoIeLUc8tN0JVMvU",
  authDomain: "tusec-67a2d.firebaseapp.com",
  projectId: "tusec-67a2d",
  storageBucket: "tusec-67a2d.appspot.com",
  messagingSenderId: "692005501963",
  appId: "1:692005501963:web:08c10f74833baf588c1b0e",
};
initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
