"use client";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALgSBNIXYBg3K7Hsi503LiYSC2STEVe4U",
  authDomain: "mahjong-online-9bc7f.firebaseapp.com",
  projectId: "mahjong-online-9bc7f",
  storageBucket: "mahjong-online-9bc7f.appspot.com",
  messagingSenderId: "423406873005",
  appId: "1:423406873005:web:43a0a8b022b5e04e6f9924",
  measurementId: "G-ME71JFE13R",
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined" && !firebase.apps.length) {
  const analytics = getAnalytics(app);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

function SignIn() {
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

const SignOut = async () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default function SignInButton() {
  const [user] = useAuthState(auth as any);
  return <>{user ? <SignOut /> : <SignIn />}</>;
}

export {signInWithGoogle, auth, firestore};
