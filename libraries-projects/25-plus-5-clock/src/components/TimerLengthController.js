import React from "react";
import "./TimerLengthController.css";

function TimerLengthController({ type, length, isActive, handleLength }) {
  return (
    <div className={`controller-wrapper ${type}-controller-wrapper`}>
      <p
        id={`${type}-label`}
        className="controller-label"
      >{`${type} length`}</p>

      <p id={`${type}-length`} className="controller-length">
        {length}
      </p>

      <div className="controller-btn-wrapper">
        <button
          id={`${type}-decrement`}
          className={`btn decrement-btn controller-btn ${
            isActive ? "disabled-btn" : ""
          }`}
          aria-label="decrement"
          onClick={() => handleLength("decrement")}
        >
          <span className="material-icons-outlined md-18">remove</span>
        </button>

        <button
          id={`${type}-increment`}
          className={`btn increment-btn controller-btn ${
            isActive ? "disabled-btn" : ""
          }`}
          aria-label="increment"
          onClick={() => handleLength("increment")}
        >
          <span className="material-icons-outlined md-18">add</span>
        </button>
      </div>
    </div>
  );
}

export default TimerLengthController;
