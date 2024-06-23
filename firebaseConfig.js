// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth, GoogleAuthProvider } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZEg8Kc2Wd2buc5pTRAWzyOeXIkozIzs",
  authDomain: "hyffin-db.firebaseapp.com",
  projectId: "hyffin-db",
  storageBucket: "hyffin-db.appspot.com",
  messagingSenderId: "824635247694",
  appId: "1:824635247694:web:6a8a7311809b7771e7471f",
};

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
// export const firebaseAuth = getAuth();
// export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
