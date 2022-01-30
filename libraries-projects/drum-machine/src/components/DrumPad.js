import React from "react";

export default function DrumPad({ audioTitle, theKey, link, handleClick }) {
  return (
    <button
      id={audioTitle}
      className="drum-pad"
      onClick={() => handleClick(theKey)}
    >
      <audio id={theKey} className={`clip`} src={link}></audio>
      {theKey}
    </button>
  );
}
