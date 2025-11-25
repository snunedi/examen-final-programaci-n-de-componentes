import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-byDgOVOKPZJ4iS9UUxo510i07w2424M",
  authDomain: "examenfinalpc.firebaseapp.com",
  projectId: "examenfinalpc",
  storageBucket: "examenfinalpc.firebasestorage.app",
  messagingSenderId: "63980448708",
  appId: "1:63980448708:web:f60773c87d6a33b27cd291",
  measurementId: "G-DPT4D65JF6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
