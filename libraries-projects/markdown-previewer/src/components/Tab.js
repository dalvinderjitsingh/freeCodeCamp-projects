import React from "react";

export default function Tab({ toggleClass, handleClick, children }) {
  return (
    // TAB
    <button
      className={`z-10 text-base  font-medium shadow clip-path-inset rounded-t-lg hover:opacity-95 dark:border-gray-700 
      lg:bg-white lg:border-b-0 lg:border lg:opacity-100 lg:active:bg-white lg:dark:bg-gray-800 lg:p-2
      ${toggleClass}`}
      onClick={handleClick}
    >
      {children}
    </button>
    // TAB END
  );
}
