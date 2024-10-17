/* this reusable component for input , it takes 5 props
 1- width className defined by tailwind , you can use it to set width , width for different screen sizes
 2- islarge if you want to set height to 28 for large input and make it textarea
 3- label for input
 4- placeholder
 5- onChange method that takes event as parameter
 6- is Required
 7- type of input
 8- isDisabled to disable input
 9- name of input

*/

import { useEffect, useState } from "react";
import classes from "./input.module.css";

export default function Input({
  width = "w-3/4",
  islarge = false,
  label,
  placeholder,
  onChange = () => {},
  isRequired = false,
  type = "text",
  isDisabled = false,
  name,
  ...props
}) {
  return (
    <div className={`${width} `}>
      <label className="block text-[var(--label-color)]  text-sm font-bold mb-1 text-start ps-1 ">
        {label}
      </label>
      {islarge ? (
        <textarea
          type={type}
          name={name}
          disabled={isDisabled}
          required={isRequired}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className={`${islarge ? "h-28" : "w-3/4"} 
            w-full shadow-xl bg-[color:var(--input-color)] min-h-9  appearance-none  rounded-lg  py-2 ps-3 text-[color:var(--input-text:#1c1c1c)] leading-tight focus:outline-none focus:shadow-outline`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          disabled={isDisabled}
          required={isRequired}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className={`${islarge ? "h-28" : "w-3/4"} ${
            classes.removeArrow
          }  w-full shadow-xl appearance-none text-[color:var(--input-text:#1c1c1c)]  bg-[color:var(--input-color)] rounded-lg  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline`}
          {...props}
        />
      )}
    </div>
  );
}
