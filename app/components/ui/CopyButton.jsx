"use client";
import { useState } from "react";
export default function CopyButton({ textToCopy }) {
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <button
      onClick={() => copyToClipboard(textToCopy)}
      className="border-[1px] border-teal-400  bg-[color:var(--primary-color)] border-solid w-[70px] h-[36px] rounded my-6"
    >
      {isCopied ? "copied!" : "copy"}
    </button>
  );
}
