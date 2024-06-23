// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZEg8Kc2Wd2buc5pTRAWzyOeXIkozIzs",
  authDomain: "hyffin-db.firebaseapp.com",
  projectId: "hyffin-db",
  storageBucket: "hyffin-db.appspot.com",
  messagingSenderId: "824635247694",
  appId: "1:824635247694:web:6a8a7311809b7771e7471f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
