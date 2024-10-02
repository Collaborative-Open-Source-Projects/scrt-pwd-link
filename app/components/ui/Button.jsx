import React from "react";
/* this reusable component for button
 1- takes isMain prop , which implement two different styles 
 2- takes children to put the content of the button
 3- takes type
 4- takes onClick
*/
export default function Button({
  isMain = false,
  children,
  type = "button",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`box-border w-fit px-4 mt-5 h-[36px] font-semibold rounded ${
        isMain
          ? "hover:bg-teal-700 bg-teal-600 text-black "
          : "text-teal-600 bg-white"
      }`}
    >
      {children}
    </button>
  );
}
