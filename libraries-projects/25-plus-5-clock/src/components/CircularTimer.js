import React from "react";
import "./CircularTimer.css";

function CircularTimer({
  timeLeft,
  timerType,
  isActive,
  circleDasharray,
  progressIndicatorColor
}) {
  return (
    <div className="base-timer-wrapper">
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 105 105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="52.5"
              cy="52.5"
              r="45"
            />
            <path
              id="base-timer-path-remaining"
              strokeDasharray={circleDasharray + " 283"}
              className={`base-timer__path-remaining ${progressIndicatorColor}`}
              d="
        M 52.5, 52.5
        m -45, 0
        a 45,45 0 1,0 90,0
        a 45,45 0 1,0 -90,0
      "
            ></path>
          </g>
        </svg>
        <span id="time-left" className="base-timer__time-left">
          {timeLeft}
        </span>
        <span id="timer-label" className="base-timer__timer-label">
          {timerType}
        </span>
      </div>
    </div>
  );
}

export default CircularTimer;
