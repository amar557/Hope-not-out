import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDebYBfsCrXt11hPjm0mqGqp2FCuGXG9-c",
  authDomain: "hopenotout-4048e.firebaseapp.com",
  projectId: "hopenotout-4048e",
  storageBucket: "hopenotout-4048e.appspot.com",
  messagingSenderId: "940305558131",
  appId: "1:940305558131:web:a20141820ab0b004c8d806",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
