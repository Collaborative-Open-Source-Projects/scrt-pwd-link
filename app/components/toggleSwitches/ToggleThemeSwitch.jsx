"use client";
import "./toggleThemeSwitch.css";
import { useState, useEffect } from "react";

function ToggleThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set isDarkMode to true if isDarkMode is true on localStorage
  useEffect(() => {
    const darkModeSetting = localStorage.getItem("isDarkMode");
    if (darkModeSetting === "true") {
      setIsDarkMode(true);
    }
  }, []);

  // Add or remove dark-theme class to enable or disable dark-theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  // Enable or disable darkMode
  function toggle() {
    const newDarkmodeValue = !isDarkMode;
    setIsDarkMode(newDarkmodeValue);
    localStorage.setItem("isDarkMode", newDarkmodeValue);
  }

  return (
    <div
      className={`size-[46px] cursor-pointer .toggle-theme-switch  flex justify-center items-center ml-4  rounded-full border-teal-500 border-[1px] border-solid`}
      onClick={toggle}
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="orange"
            d="M15.92 7.73c-.83 0-1.5-.67-1.5-1.5V3.5c0-.82.67-1.5 1.5-1.5c.82 0 1.5.67 1.5 1.5v2.73c0 .83-.68 1.5-1.5 1.5m0 15.55c-4.06 0-7.37-3.3-7.37-7.37a7.37 7.37 0 0 1 14.74 0c0 4.07-3.31 7.37-7.37 7.37m0-11.73c-2.41 0-4.37 1.96-4.37 4.37s1.96 4.37 4.37 4.37s4.37-1.96 4.37-4.37a4.38 4.38 0 0 0-4.37-4.37m-7.91-1.42c.58.58 1.54.58 2.12 0s.58-1.54 0-2.12L8.2 6.08c-.58-.58-1.54-.58-2.12 0s-.58 1.54 0 2.12zm-.28 5.79c0 .83-.67 1.5-1.5 1.5H3.5c-.82 0-1.5-.67-1.5-1.5c0-.82.67-1.5 1.5-1.5h2.73c.83 0 1.5.67 1.5 1.5m2.4 7.91c.58-.58.58-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0l-1.93 1.93c-.58.58-.58 1.54 0 2.12s1.54.58 2.12 0zm5.79.27c.83 0 1.5.67 1.5 1.5v2.73c0 .82-.67 1.5-1.5 1.5c-.82 0-1.5-.67-1.5-1.5V25.6c0-.82.67-1.5 1.5-1.5m7.91-2.39c-.58-.58-1.54-.58-2.12 0a1.49 1.49 0 0 0 0 2.12l1.93 1.93c.58.58 1.54.58 2.12 0s.58-1.54 0-2.12zm.27-5.79c0-.83.67-1.5 1.5-1.5h2.73c.82 0 1.5.67 1.5 1.5c0 .82-.67 1.5-1.5 1.5H25.6c-.82 0-1.5-.68-1.5-1.5m-2.39-7.91c-.58.58-.58 1.54 0 2.12s1.53.58 2.12 0l1.93-1.93c.58-.58.58-1.54 0-2.12s-1.54-.58-2.12 0z"
          />
        </svg>
      ) : (
        <svg
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
        >
          <path
            fill="black" // Corrected fill property
            d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
            s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
          />
        </svg>
      )}
    </div>
  );
}

export default ToggleThemeSwitch;
