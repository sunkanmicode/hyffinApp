import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  getRedirectResult,
  sendPasswordResetEmail,
  signInWithRedirect,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const authUsersLogin = async (data: any) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    AsyncStorage.setItem("token", res?.user?.accessToken);
    // console.log(res, "userAuth");
    if (res) {
      return res;
    }
  } catch (error) {
    console.error(error, "Sign in");
    throw error;
  }
};

export const loginWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    // AsyncStorage.setItem("token", res.user.accessToken);
    console.log(res, "googleLogin");
    if (res) {
      // window.location.href = "/dashboard";
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (data: any) => {
  console.log(data, "createuser");
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
      //   displayName,
      //   data?.phoneNumber
    );
    // console.log(result, "0000");
    await setDoc(doc(db, "users", result.user.uid), {
      displayName: data?.displayName,
      phoneNumber: data?.phoneNumber,
      email: data?.email,
      timeStamp: serverTimestamp(),
    });
    // console.log(result, "register");
    //  toast.success("SUCCESSFULL");
    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
