"use client";
import Image from "next/image";
import { useState } from "react";
import check from "./icons/checkbox.png";
/* this reusable component for checkbox input , it takes 4 props
 1- name for checkbox
 2- label for checkbox
 3- onSelect method that takes boolean as parameter
 4- isChecked
 5- isDisabled
*/
export default function CheckBox({
  name = "checkbox",
  label = "checkbox",
  onSelect = () => {},
  isChecked = false,
  isDisabled = false,
}) {
  const [checked, setChecked] = useState(isChecked);
  function handleCheckboxChange() {
    setChecked((perv) => !perv);
    onSelect(!checked);
  }
  return (
    <div className="flex items-center ">
      <button
        type="button"
        disabled={isDisabled}
        name={name}
        onClick={handleCheckboxChange}
        className="accent-teal-600 w-5 h-5 bg-[color:var(--input-color)] border-gray-100 border focus:ring-0  shadow-md"
      >
        {checked && <Image src={check} alt="checkbox" />}
      </button>

      <label
        className={`${
          checked ? "text-teal-600" : "text-gray-500"
        } ml-2 text-sm font-semibold `}
      >
        {label}
      </label>
    </div>
  );
}
