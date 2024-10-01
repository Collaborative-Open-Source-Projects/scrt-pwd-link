"use client";
import { useState } from "react";
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
    <div className="flex items-center mb-4">
      <input
        disabled={isDisabled}
        name={name}
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
        className="accent-teal-600 w-5 h-5 border-gray-100 border-4 focus:ring-0  shadow-md"
      />

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
