import React from "react";

export default function Button({
  displayTooltip,
  aria,
  handleClick,
  tooltipId,
  tooltipInfo,
  icon,
  addClass
}) {
  return (
    // BUTTON
    <button
      aria-describedby={aria}
      class={`z-40 group relative h-34px  p-1 text-gray-900 bg-white opacity-75 hover:opacity-95 hover:bg-gray-300 active:bg-gray-400 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 dark:active:bg-gray-700  border shadow dark:border-gray-700 rounded-lg ${addClass}`}
      onClick={handleClick}
    >
      {/* TOOLTIP */}
      {displayTooltip && (
        <span
          role="tooltip"
          id={tooltipId}
          class="z-50 invisible group-hover:visible text-xs absolute top-9 -left-5 rounded shadow-md p-1 text-gray-900 bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
        >
          {tooltipInfo}
        </span>
      )}
      {/* TOOLTIP END */}
      {/* ICON */}
      <span class="material-icons">{icon}</span>
      {/* ICON END */}
    </button>
    // BUTTON END
  );
}
