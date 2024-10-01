import React from "react";
/* this reusable component for button
 1- takes isMain prop , which implement two different styles 
 2- takes children to put the content of the button
*/
export default function Button({ isMain = false, children }) {
  return (
    <button
      className={`box-border px-4 h-[36px]  rounded ${
        isMain ? "hover:bg-teal-700 bg-teal-600" : "text-teal-600 bg-white"
      }`}
    >
      {children}
    </button>
  );
}
