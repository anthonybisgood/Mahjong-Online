"use client";
import { useRouter } from "next/navigation";
import { Header } from "../Components/Header";
import { auth, firestore } from "../Components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";

function createRoom(props: any) {}

async function checkAuth(router: any) {
  const user = auth.currentUser;
  if (user) {
  } else {
    router.push("/");
  }
}

export default function GameLobby(props: any) {
  const router = useRouter();
  checkAuth(router);
  createRoom(props);
  const [user] = useAuthState(auth as any);
  
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
