"use client";
import { Header } from "../Components/Header";
import { auth, firestore } from "../Components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle } from "../Components/SignInButton";
import { useRouter } from "next/navigation";

export default function GameLobby() {
  const router = useRouter();
  if (!auth.currentUser) {
    router.push("/");
    alert("You must be signed in to join a game.");
  }
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
