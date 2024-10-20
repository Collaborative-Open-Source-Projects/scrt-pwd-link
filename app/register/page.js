"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export  default function Page()  {
  const router = useRouter();
  const [isPassVisible, setPassVisible] = useState(false);
  const [isCnfmPassVisible, setCnfmPassVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    emailAddress: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrMsg("");
  }

  async function signUp(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch("/api/add-user", options);
      const data = await response.json();

      if (!data.success) return setErrMsg(data.msg);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="m-auto  w-[90%] h-[600px] mt-[8vh] sm:w-[60%] max-w-[500px] justify-center rounded md:w-[50%] lg:w-[40%] 2xl:[20%] flex flex-col border-solid  border-gray-300 bg-white/10  border-[2px] box-border  items-center">
      <h1 className="text-4xl  mb-[6%] " id="company-name">
        Company Name
      </h1>
      <form
        className="flex flex-col items-center w-[70%] sm:w-[60%] my-2  mx-auto"
        onSubmit={signUp}
      >
        <label htmlFor="emailAddress">
          Email address
          <div className="rounded relative w-[296px]  [2px] my-1 focus-within:bg-white p-2 flex bg-gray-100 items-center">
            <span className=" left-2  text-xl">&#128231;</span>
            <input
              type="email"
              className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black "
              placeholder="Email address"
              name="emailAddress"
              id="emailAddress"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
        </label>
        <label htmlFor="userName">
          Username
          <div className="rounded relative w-[296px]  [2px] my-1 focus-within:bg-white p-2 flex bg-gray-100 items-center">
            <span>&#128100;</span>
            <input
              type="text"
              className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black "
              placeholder="Create username"
              name="username"
              id="userName"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <span className="text-teal-600 cursor-pointer "> CHECK</span>
          </div>
        </label>

        <label htmlFor="password">
          Password
          <div className="rounded relative w-[296px] focus-within:bg-white my-1 p-2 flex bg-gray-100 items-center">
            <span>&#128273;</span>
            <input
              type={isPassVisible ? "text" : "password"}
              className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black  "
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <span
              className="cursor-pointer text-teal-600 "
              onClick={() => setPassVisible(!isPassVisible)}
            >
              {isPassVisible ? "HIDE" : "SHOW"}
            </span>
          </div>
        </label>
        <label htmlFor="cnfmPassword">
          Confirm Password
          <div className="rounded relative w-[296px] focus-within:bg-white my-1 p-2 flex bg-gray-100 items-center">
            <span>&#128273;</span>
            <input
              type={isCnfmPassVisible ? "text" : "password"}
              className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black  "
              placeholder="Password"
              name="cnfmPassword"
              id="cnfmPassword"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <span
              className="cursor-pointer text-teal-600 "
              onClick={() => setCnfmPassVisible(!isCnfmPassVisible)}
            >
              {isCnfmPassVisible ? "HIDE" : "SHOW"}
            </span>
          </div>
        </label>

        {errMsg && <div className="err-msg">{errMsg}</div>}

        <input
          type="submit"
          value={"Sign Up"}
          className=" w-[160px] h-[48px] my-3 rounded bg-teal-600 hover:bg-teal-500 cursor-pointer font-bold"
        />
      </form>
      <div>
        Have an account?
        <Link href={"/login"}>
          <button className="text-blue-500 ml-2">Login</button>
        </Link>
      </div>
    </div>
  );
};
