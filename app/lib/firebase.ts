import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoGcmc9m3QglJ-6QXf9r6Ntm34hC64THU",
  authDomain: "koin-tabungan.firebaseapp.com",
  projectId: "koin-tabungan",
  storageBucket: "koin-tabungan.appspot.com",
  messagingSenderId: "536299540387",
  appId: "1:536299540387:web:97279d291b7d3e16e4d416",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
