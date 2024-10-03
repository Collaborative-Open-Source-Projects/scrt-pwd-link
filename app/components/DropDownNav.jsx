import { useEffect } from "react";

export const DropDownNav = () => {
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (
        e.target.closest("#dropDownNav") ||
        e.srcElement.id === "mobile-menu"
      ) {
        return;
      }
      // Example: Check if the click happened outside a specific element
      if (!e.target.closest("#dropDownNav")) {
        document.getElementById("dropDownNav").classList.add("hidden");

        // You can add logic to hide the dropdown here
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return (
    <ul
      id="dropDownNav"
      style={{ listStyle: "none" }}
      className="max-w-[120px] w-[120px] bg-blue-200/40 border-solid hidden backdrop-blur-lg border-white border-opacity-30 absolute p-[0] top-[48px] left-[-56px] shadow-lg shadow-black/20"
    >
      <li className="h-[36px] text-center hover:bg-blue-500 leading-[36px]">
        <a className="no-underline  font-bold" href="/home">
          Home
        </a>
      </li>
      <li className="h-[36px] text-center hover:bg-blue-500 leading-[36px]">
        <a className="no-underline font-bold">About</a>
      </li>
      <li className="h-[36px] text-center hover:bg-blue-500 leading-[36px]">
        <a className="no-underline  font-bold">FAQ</a>
      </li>
      <li className="h-[36px] text-center hover:bg-blue-500 leading-[36px]">
        <a className="no-underline font-bold">Support</a>
      </li>
    </ul>
  );
};
