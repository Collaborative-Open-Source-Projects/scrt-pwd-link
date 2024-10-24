"use client";
import { useState } from "react";
import SecretContainer from "./components/mainPage/SecretContainer";
import PrivacySettings from "./components/mainPage/PrivacySettings";
import Headtext from "./components/mainPage/Headtext";
export default function Home() {
  const [secret, setSecret] = useState("");
  const [status, setStatus] = useState(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    alert(`You entered: ${secret}`);
    const response = await fetch("/api/encrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret }),
    });

    const result = await response.json();
    setStatus(result);
    setSecret("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Headtext
        h1="Enter your Secret key , Credentials , Api keys , Anything"
        h2="And Get a secure one-time link in return"
      />

      <form
        method="POST"
        className="flex flex-col md:flex-row md:items-end
       justify-between gap-5 mb-5"
      >
        <SecretContainer
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          onClick={handleButtonClick}
        />
        <PrivacySettings />
      </form>

      {status && (
        <div>
          {status.success ? (
            <p style={{ color: "green" }}>{status.link}</p>
          ) : (
            <p style={{ color: "red" }}>{status.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
