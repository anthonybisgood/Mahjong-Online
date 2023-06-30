"use client";
import { useRouter } from "next/navigation";
import { Header } from "../Components/Header";
import { auth, firestore } from "../Components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useEffect } from "react";
import firebase from "firebase/compat/app";

function createRoom(props: any) {}


export default function GameLobby(props: any) {
  const router = useRouter();
  const [user] = useAuthState(auth as any);
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      router.push("/");
    }
  });
 
  // useEffect(() => {
  //   checkAuth(router);
  //   if (!auth.currentUser) {

  //     router.push("/");
  //   }
  // });

  return (
    <>
      <Header />
      <main>
        <h1 className="flex justify-center text-3xl my-10">New Game</h1>
      </main>
    </>
  );
}

export { GameLobby };
