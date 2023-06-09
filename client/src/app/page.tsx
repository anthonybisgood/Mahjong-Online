"use client";
import Link from "next/link";
import React, {useState, useEffect} from "react";

import { Header } from "../app/Components/Header";
import { RoomForm } from "../app/Components/RoomForm";
import { auth, firestore } from "../app/Components/SignInButton";
import { randomCode } from "../app/Hooks/generateCode";


async function createGameRoom() {
  let code = ""
  await randomCode().then((result) => { code = result });
  const lobbyRef = firestore.collection("gameLobby");
  const createLobby = async () => {
    const lobby = await lobbyRef.add({
      players: [],
      games: [],
      code: code,
    });
    return lobby.id;
  }
  const lobbyId = createLobby();
  return lobbyId;
}

function NewGameButton() {
  var [href, setHref] = useState({});
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!auth.currentUser) {
      alert("You must be signed in to create a game.");
      e.preventDefault();
      return;
    }
    const newLobbyId = await createGameRoom();
    setHref(`/lobby?lobbyID=${newLobbyId}`);
  };
  return (
    <>
      <Link
        onClick= {(e) => {handleClick(e)}}
        href= {href}
        className="border rounded-full hover:text-cyan-500 hover:border-cyan-500 p-2 mt-2"
        id="new-game-button"
      >
        New Game
      </Link>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <h1 className="text-3xl my-10">Welcome to Mahjong Online</h1>
        <NewGameButton />
        <RoomForm />
        <section className="mt-8 items-start px-[15%]">
          <p>
            &emsp;&emsp;Mahjong is a captivating and timeless game that
            originated in China and has gained popularity worldwide. Played with
            a set of beautifully crafted tiles, the game requires a combination
            of skill, strategy, and a touch of luck. The objective of Mahjong is
            to build sets and pairs of tiles, using a mixture of memory,
            calculation, and observation skills. Players carefully study the
            arrangement of tiles on the table, strategically drawing and
            discarding them to complete various combinations, such as sequences,
            triplets, and unique sets. The game&apos;s complexity lies in the
            countless tile combinations and the intricacies of different scoring
            systems, which vary depending on the regional variations of Mahjong
            being played. Whether engaging in a leisurely match with friends or
            participating in intense competitive tournaments, Mahjong offers a
            deeply immersive experience that challenges the mind and provides
            endless hours of enjoyment.
          </p>
          <p className="mt-4">
            &emsp;&emsp;Beyond its gameplay mechanics, Mahjong also holds
            cultural significance, serving as a window into Chinese traditions
            and aesthetics. The tiles are adorned with elegant designs,
            featuring intricate symbols and characters that reflect the
            game&apos;s rich heritage. Mahjong gatherings often bring people
            together, fostering social interaction, and creating a sense of
            camaraderie among players. It is a game that transcends language
            barriers and connects people across cultures, with its popularity
            spreading to different corners of the globe. With its blend of
            strategy, cultural immersion, and social engagement, Mahjong
            continues to captivate players of all ages and backgrounds, ensuring
            its legacy as a beloved classic for generations to come.
          </p>
        </section>
      </main>
    </>
  );
}
