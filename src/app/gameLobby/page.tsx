"use client";
import { Header } from "../Components/Header";
import { auth, firestore } from "../Components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/navigation";

function createRoom(props: any) {
  
}

export default function GameLobby(props: any) {
  const router = useRouter();
  if (!auth.currentUser) {
    router.push("/");
    alert("You must be signed in to join a game.");
  } else {
    router.push("/gameLobby");
  }
  createRoom(props);

  // join game
  if (props) {
    console.log(props);
  }
  console.log(props);
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

export {GameLobby};
