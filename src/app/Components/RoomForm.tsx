"use client";
import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [roomNumber, setRoomNumber] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomNumber(event.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the room number
  };

  return (
    <form className="bg-white shadow-md rounded" onSubmit={onSubmit}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="RoomNumber"
        type="text"
        placeholder="Room Number"
        value={roomNumber}
        onChange={onChange}
      ></input>
    </form>
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
