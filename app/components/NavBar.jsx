import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/company-logo.svg";
import { DropDownMenu } from "./DropDownMenu";
import ToggleThemeSwitch from "./toggleSwitches/ToggleThemeSwitch.jsx";

export const NavBar = () => {
  return (
    <div className="sticky top-0" id="nav-container">
      <nav className="w-[86%] md:w-[66%] h-[64px] mb-2 mx-auto backdrop-blur-sm    flex  items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="company-logo" width={"42px"} height={"42px"} />
        </Link>

        <ul
          id="nav-desktop-view"
          style={{ listStyleType: "none" }}
          className="w-[50%] flex mx-[2%]  space-x-6 items-center"
        >
          <Link href="/dashboard">
            <li className="block text-gray-400 hover:text-[#ffffff]">Home</li>
          </Link>
          <Link href="/about">
            <li className="block text-gray-400 hover:text-[#ffffff]">About</li>
          </Link>
          <Link href="/faq">
            <li className="block text-gray-400 hover:text-[#ffffff]">FAQ</li>
          </Link>
          <Link href="/support">
            <li className="block text-gray-400 hover:text-[#ffffff]">
              Support
            </li>
          </Link>
        </ul>
        <div className="w-auto ml-auto flex items-center md:space-x-6 space-x-2">
          <Link href={"/authentication"}>
            <button className="box-border px-4 h-[36px]  rounded hover:bg-teal-700 bg-teal-600">
              Login
            </button>
          </Link>
          <Link href={"/authentication"}>
            <button className=" h-[36px] px-4 rounded hidden md:block bg-white hover:bg-white/90 text-teal-600">
              Register
            </button>
          </Link>
        </div>
        <DropDownMenu />
        <ToggleThemeSwitch />
      </nav>
    </div>
  );
};
