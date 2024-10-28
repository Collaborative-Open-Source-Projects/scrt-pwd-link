"use client";
import drop from "./icons/drop.png";
import Image from "next/image";
import { useState } from "react";
/* 
    This reusable component for dropmenu , it takes 3 props
    1- options for dropmenu
    2- onSelect method that takes option as parameter
    3- SelectedValue is the default value of dropmenu
    4- width for different screen sizes
    5- name of the dropmenu to access it in forms 
*/
export default function Dropmenu({
  options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  onSelect = () => {},
  SelectedValue = "Select",
  width = "w-[120px]",
  name = "dropmenu",
  isDisabled,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(SelectedValue);
  function handleSelect(option) {
    if (open) {
      setOpen(false);
    }
    setValue(option);
    onSelect(option);
  }
  return (
    <div className={`${width} inline-block relative  `}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={` bg-[color:var(--input-color)] ${
          isDisabled ? "cursor-none" : "cursor-pointerl"
        } shadow-xl text-start h-10  w-full  rounded-md  relative text-gray-500  py-2 px-2`}
      >
        {value}
        <Image
          src={drop}
          alt="drop"
          width={15}
          height={15}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute shadow-2xl rounded-md w-full rounded-t-none bg-[color:var(--input-color)] `}
      >
        {options.map((option) => (
          <li
            key={option}
            className="text-centers cursor-pointer py-2 px-2 hover:bg-[color:var(--secondry-input)]"
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {/* this hidden input takes the current value , so if we use formdata or similar thing we can access to it with name  */}
      <input type="hidden" value={value} name={name} />
    </div>
  );
}
