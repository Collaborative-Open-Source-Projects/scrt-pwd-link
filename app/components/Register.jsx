import { useState } from "react";

export const Register = ({ isAlreadyUser, setAlreadyUser }) => {
  const [isPassVisible, setPassVisible] = useState(false);
  const [isCnfmPassVisible, setCnfmPassVisible] = useState(false);
  return (
    <div className="m-auto  w-[90%] h-[600px] mt-[8vh] sm:w-[60%] max-w-[500px] justify-center rounded md:w-[50%] lg:w-[40%] 2xl:[20%] flex flex-col border-solid  border-gray-300 bg-white/10  border-[2px] box-border  items-center">
      <h1 className="text-4xl  mb-[6%] " id="company-name">
        Company Name
      </h1>
      <form className="flex flex-col items-center w-[70%] sm:w-[60%] my-2  mx-auto">
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
            />
            <span
              className="cursor-pointer text-teal-600 "
              onClick={() => setCnfmPassVisible(!isCnfmPassVisible)}
            >
              {isCnfmPassVisible ? "HIDE" : "SHOW"}
            </span>
          </div>
        </label>
        <input
          type="submit"
          value={"Sign Up"}
          className=" w-[160px] h-[48px] my-3 rounded bg-teal-600 hover:bg-teal-500 cursor-pointer font-bold"
        />
      </form>
      <div>
        Have an account?
        <button
          className="text-blue-500 ml-2"
          onClick={() => setAlreadyUser(!isAlreadyUser)}
        >
          Login
        </button>
      </div>
    </div>
  );
};
