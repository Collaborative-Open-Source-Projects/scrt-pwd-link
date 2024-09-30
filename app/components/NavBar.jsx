import Link from "next/link";
import ToggleThemeSwitch from "./toggleSwitches/ToggleThemeSwitch.jsx";

export const NavBar = () => {
  return (
    <div className="sticky top-0" id="nav-container">
      <nav className="w-[66%] h-[64px] my-2 mx-auto backdrop-blur-sm border-b-[2px] border-solid border-gray-600  flex  items-center">
        <Link href={"/"}>
          <img
            src="/images/company-logo.svg"
            alt="company-logo"
            width={"42px"}
            height={"42px"}
          />
        </Link>

        <ul
          id="nav-desktop-view"
          style={{ listStyleType: "none" }}
          className="w-[50%] flex mx-[2%]  space-x-6 items-center"
        >
          <a href="/dashboard">
            <li className="block text-gray-400 hover:text-[#ffffff]">Home</li>
          </a>
          <a href="/about">
            <li className="block text-gray-400 hover:text-[#ffffff]">About</li>
          </a>
          <a href="/about">
            <li className="block text-gray-400 hover:text-[#ffffff]">FAQ</li>
          </a>
          <a href="/about">
            <li className="block text-gray-400 hover:text-[#ffffff]">
              Support
            </li>
          </a>
        </ul>
        <div className="w-auto ml-auto flex space-x-6">
          <button className="box-border px-4 h-[36px] rounded hover:bg-teal-700 bg-teal-600">
            Login
          </button>
          <button className=" h-[36px] px-4 rounded bg-white hover:bg-white/90 text-teal-600">
            Register
          </button>
			<ToggleThemeSwitch />
        </div>
      </nav>
    </div>
  );
};
