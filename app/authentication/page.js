"use client";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useState } from "react";

export default function Page() {
  const [isAlreadyUser, setAlreadyUser] = useState(false);
  return isAlreadyUser ? (
    <Login isAlreadyUser={isAlreadyUser} setAlreadyUser={setAlreadyUser} />
  ) : (
    <Register isAlreadyUser={isAlreadyUser} setAlreadyUser={setAlreadyUser} />
  );
}
