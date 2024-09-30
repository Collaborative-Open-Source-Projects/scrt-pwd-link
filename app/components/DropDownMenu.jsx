"use client";
import { DropDownNav } from "./DropDownNav";
export const DropDownMenu = () => {
  return (
    <>
      <div
        id="mobile-menu"
        onClick={() => {
          const dropDownMenu = document.getElementById("dropDownNav");

          dropDownMenu.classList.toggle("hidden");
        }}
        className="mobile-menu md:hidden rounded relative hover:bg-white/80 cursor-pointer"
      >
        <DropDownNav />
      </div>
    </>
  );
};
