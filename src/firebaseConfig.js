import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmGXsxq0J8UEN_fR6uQmWTlWJiBSkxldk",
  authDomain: "react-auth-upload2.firebaseapp.com",
  projectId: "react-auth-upload2",
  storageBucket: "react-auth-upload2.firebasestorage.app",
  messagingSenderId: "1051253969165",
  appId: "1:1051253969165:web:aff78354f8cf4a0a282044"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
