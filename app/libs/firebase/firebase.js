import { initializeApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const api_key = process.env.API_KEY_FIREBASE;

console.log(api_key, "api_key");
const firebaseConfig = {
  apiKey: api_key,
  authDomain: "presupuesto-app-e5cb9.firebaseapp.com",
  projectId: "presupuesto-app-e5cb9",
  storageBucket: "presupuesto-app-e5cb9.appspot.com",
  messagingSenderId: "1061924200767",
  appId: "1:1061924200767:web:187210433f685524d0b38a",
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
