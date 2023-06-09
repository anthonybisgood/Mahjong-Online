"use client";
import React from "react";
import { useState } from "react";
import { auth, firestore, signInWithGoogle } from "../Components/SignInButton";

const joinRoom = (roomNumber: string) => {
  if (!auth.currentUser) {
    alert("You must be signed in to join a game.");
    return;
  }
  
  var pattern = /^[A-Z]{6}$/;
  if (!pattern.test(roomNumber)) {
    alert("Invalid room number.");
    return;
  }
  var newURL= `/lobby?lobbyID=${roomNumber}`;
  window.location.href = newURL;
  
};

const FormComponent = () => {
  const [roomNumber, setRoomNumber] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value.toUpperCase();

    setRoomNumber(text);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!auth.currentUser) {
      alert("You must be signed in to join a game.");
    } else {
      event.preventDefault();
      joinRoom(roomNumber);
    }
    // Do something with the room number
  };

  return (
    <div className="flex">
      <form
        className="bg-white shadow-md rounded"
        onSubmit={onSubmit}
        id="RoomNumber"
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={onChange}
        ></input>
      </form>
      <button
        type="submit"
        form="RoomNumber"
        value="Submit"
        className="border ml-2 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default function RoomForm() {
  return (
    <div className="max-w-xs justify-center mt-7">
      <div className="justify-center flex mb-1">
        Already have a room number?
      </div>
      <FormComponent />
    </div>
  );
}

export { RoomForm };
