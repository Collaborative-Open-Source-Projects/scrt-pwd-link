"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [isPassVisible, setPassVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    nameOrEmail: "",
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

  async function signIn(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch("/api/sign-in", options);
      const data = await response.json();

      if (!data.success) return setErrMsg(data.msg);
      document.cookie = `token=${
        data.token
      };SameSite=None; Secure; path=/; max-age=${3600 * 24 * 31}; `;
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
        onSubmit={signIn}
      >
        <label htmlFor="userName">
          Username or Email address
          <div className="rounded relative w-[296px]  [2px] my-1 focus-within:bg-white p-2 flex bg-gray-100 items-center">
            <span className=" left-2 top-[6px]">&#128100;</span>
            <input
              type="text"
              className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black "
              placeholder="username or email address"
              name="nameOrEmail"
              id="userName"
              autoComplete="on"
              onChange={handleInputChange}
            />
          </div>
        </label>

        <label htmlFor="password">
          Password
          <div className="rounded relative w-[296px] focus-within:bg-white my-1 p-2 flex bg-gray-100 items-center">
            <span className=" left-2 top-[6px]">&#128273;</span>
            <input
              type={isPassVisible ? "text" : "password"}
              className=" rounded mx-2 h-[36px] focus:outline-none bg-gray-100 focus:bg-white text-black "
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="on"
              onChange={handleInputChange}
            />
            <span
              onClick={() => {
                setPassVisible(!isPassVisible);
              }}
              className="text-teal-600  cursor-pointer font-bold text-[10px] p-0 m-0"
            >
              {isPassVisible ? "HIDE" : "SHOW"}
            </span>
          </div>
        </label>

        {errMsg && <div className="err-msg">{errMsg}</div>}

        <input
          type="submit"
          value={"Login"}
          className=" w-[160px] h-[48px] my-3 rounded bg-teal-600 hover:bg-teal-500 cursor-pointer font-bold"
        />
      </form>
      <div>
        Don&apos;t have an account?
        <Link href={"/register"}>
          <button className="text-blue-500 ml-2">Sign up</button>
        </Link>
      </div>
    </div>
  );
};
