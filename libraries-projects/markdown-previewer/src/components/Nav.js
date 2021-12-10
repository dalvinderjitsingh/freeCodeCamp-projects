import React from "react";
import Button from "./Button";

export default function Nav({ darkMode, setDarkMode }) {
  return (
    // NAV BAR
    <nav className="NAV pt-2 px-4 pb-2 w-full flex justify-between items-center bg-white dark:bg-gray-800 shadow">
      <div className="empty-div-for-flex"></div>

      {/* HEADER */}
      <h1 className="title text-2xl">Markdown Previewer</h1>
      {/* HEADER END */}

      {/* DARK MODE BTN CONTAINER */}
      <div className="DARK-MODE-CONTAINER flex">
        {/* DARK MODE BUTTON */}
        <Button
          displayTooltip={true}
          aria="tooltip1"
          handleClick={() => setDarkMode(!darkMode)}
          tooltipId="tooltip1"
          tooltipInfo="Toggle dark&nbsp;mode"
          icon={darkMode ? "light_mode" : "dark_mode"}
          addClass="z-50"
        />
        {/* DARK MODE BUTTON END*/}
      </div>
      {/* DARK MODE BTN CONTAINER END */}
    </nav>
    // NAV BAR END
  );
}
