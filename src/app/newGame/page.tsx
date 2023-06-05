"use client";
import { Header } from "../Components/Header";
import { auth, firestore } from "../Components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";

export default function NewGame() {
  const [user] = useAuthState(auth as any);
  console.log(user);
  const db = firestore;
  console.log(db);
  return (
    <>
      <Header />
      <main>
        <h1 className="flex justify-center text-3xl my-10">New Game</h1>
        
      </main>
    </>
  );
}
