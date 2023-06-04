"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
export { auth, firestore };

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default function Home() {
  const [user] = useAuthState(auth as any);
  return (
    <>
      <header className="">
        <section className="flex justify-end m-2">
          <Link className="p-2" href="">
            Rules
          </Link>
          <div className="border rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500">
            {user ? <SignOut /> : <SignIn />}
          </div>
        </section>
      </header>
      <main>
        <h1 className="flex justify-center text-xl">
          Welcome to Mahjong Online!
        </h1>
      </main>
    </>
  );
}
