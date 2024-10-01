import { useState } from "react";

export const Login = ({ isAlreadyUser, setAlreadyUser }) => {
  const [isPassVisible, setPassVisible] = useState(false)
  return (
    <div className="m-auto  w-[90%] h-[600px] mt-[8vh] sm:w-[60%] max-w-[500px] justify-center rounded md:w-[50%] lg:w-[40%] 2xl:[20%] flex flex-col border-solid  border-gray-300 bg-white/10  border-[2px] box-border  items-center">
      <h1 className="text-4xl  mb-[6%] " id="company-name">
        Company Name
      </h1>
      <form className="flex flex-col items-center w-[70%] sm:w-[60%] my-2  mx-auto">
      <label htmlFor="userName">
        Username or Email address
        <div className="rounded relative w-[296px]  [2px] my-1 focus-within:bg-white p-2 flex bg-gray-100 items-center">
           <span className=" left-2 top-[6px]">&#128100;</span>
        <input type="text" className=" rounded bg-gray-100 mx-2 h-[36px] text-sm focus:outline-none focus:bg-white text-black " placeholder="username or email address" name="username" id="userName"/>
     
        </div></label>

        <label htmlFor="password">Password
        <div className="rounded relative w-[296px] focus-within:bg-white my-1 p-2 flex bg-gray-100 items-center">
           <span className=" left-2 top-[6px]">&#128273;</span>
        <input type={isPassVisible ? 'text' : 'password' } className=" rounded mx-2 h-[36px] focus:outline-none bg-gray-100 focus:bg-white text-black " placeholder="Password" name="password" id="password"/>
        <span onClick={() =>{ 
          setPassVisible(!isPassVisible)}} className="text-teal-600  cursor-pointer font-bold text-[10px] p-0 m-0">{isPassVisible?'HIDE':'SHOW'}</span>
     
        </div>
      </label>
      <input type="submit" value={'Login'} className=" w-[160px] h-[48px] my-3 rounded bg-teal-600 hover:bg-teal-500 cursor-pointer font-bold"/>
        
      </form>
      <div >
        Don't have an account? 
      <button
        className="text-blue-500 ml-2"
        onClick={() => setAlreadyUser(!isAlreadyUser)}
      >
        Sign up
      </button></div>
    </div>
  );
};
