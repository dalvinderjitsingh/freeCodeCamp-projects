import React from "react";
import { useRef, useEffect, useState } from "react";
import "./App.css";
import alarm from "./audio/digital-alarm.wav";
import CircularTimer from "./components/CircularTimer";
import TimerLengthController from "./components/TimerLengthController";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(sessionLength + ":00");
  const [isActive, setIsActive] = useState(true);
  const [storedSeconds, setStoredSeconds] = useState(null);
  const [storedMinutes, setStoredMinutes] = useState(null);
  const [timerType, setTimerType] = useState("Session");
  const timerTypeChange = useRef(false);
  const [startStopBtn, setStartStopBtn] = useState("Start");
  const [circleDasharray, setCircleDasharray] = useState(283);
  const [progressIndicatorColor, setProgressIndicatorColor] = useState("green");

  let audioElem = document.getElementById("beep");

  function reset() {
    setCircleDasharray(283);
    setProgressIndicatorColor("green");
    audioElem.pause();
    audioElem.currentTime = 0;
    setIsActive(false);
    setStoredMinutes(null);
    setStoredSeconds(null);
    setSessionLength(25);
    setBreakLength(5);
    setTimerType("Session");
    setTimeLeft("25:00");
  }

  function handleSessionLength(operator) {
    if (isActive) return;

    if (operator === "decrement") {
      if (sessionLength === 1) return;
      setSessionLength((prev) => prev - 1);
    } else {
      if (sessionLength === 60) return;
      setSessionLength((prev) => prev + 1);
    }
  }

  function handleBreakLength(operator) {
    if (isActive) return;

    if (operator === "decrement") {
      if (breakLength === 1) return;
      setBreakLength((prev) => prev - 1);
    } else {
      if (breakLength === 60) return;
      setBreakLength((prev) => prev + 1);
    }
  }

  function changeProgressIndicatorColor(minute, second) {
    let timeLeftInSeconds = minute * 60 + second;

    if (timeLeftInSeconds <= 10) {
      setProgressIndicatorColor("red");
    } else if (timeLeftInSeconds <= 30) {
      setProgressIndicatorColor("yellow");
    } else {
      setProgressIndicatorColor("green");
    }
  }

  function calculateCircleDasharray(minute, second) {
    const FULL_DASH_ARRAY = 283;
    let timeLeftInSeconds = minute * 60 + second;

    let timeLength =
      (timerType === "Session" ? sessionLength : breakLength) * 60;

    let rawTimeFraction = timeLeftInSeconds / timeLength;

    let timeFraction =
      rawTimeFraction - (1 / timeLength) * (1 - rawTimeFraction);

    let circleDasharrayValue = (timeFraction * FULL_DASH_ARRAY).toFixed(0);

    setCircleDasharray(circleDasharrayValue);
  }

  useEffect(() => {
    setIsActive(false);
    setStoredMinutes(null);
    setStoredSeconds(null);
    setTimeLeft(
      sessionLength < 10 ? "0" + sessionLength + ":00" : sessionLength + ":00"
    );
  }, [sessionLength, breakLength]);

  function toggleStartStop() {
    setIsActive(!isActive);

    if (isActive) {
      setStartStopBtn("Start");
    } else {
      setStartStopBtn("Stop");
    }
  }

  useEffect(() => {
    let intervalID = null;

    if (isActive) {
      let second = storedSeconds
        ? storedSeconds
        : timerTypeChange.current === true
        ? 1
        : 0;
      let minute =
        storedMinutes || storedMinutes === 0
          ? storedMinutes
          : timerType === "Session"
          ? sessionLength
          : breakLength;

      intervalID = setInterval(countdown, 1000);

      function countdown() {
        second--;

        if (second < 0) {
          minute--;
          second = 59;
        }

        setStoredMinutes(minute);
        setStoredSeconds(second);

        let displayMinute = minute < 10 ? "0" + minute : minute;
        let displaySecond = second < 10 ? "0" + second : second;
        setTimeLeft(displayMinute + ":" + displaySecond);

        calculateCircleDasharray(minute, second);
        changeProgressIndicatorColor(minute, second);

        // End of timer
        if (minute === 0 && second === 0) {
          audioElem.play();
          setStoredMinutes(null);
          setStoredSeconds(null);

          timerType === "Session"
            ? setTimerType("Break")
            : setTimerType("Session");

          timerTypeChange.current = true;

          clearInterval(intervalID);
        }
      }
    } else {
      timerTypeChange.current = false;
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [isActive, timerType]);

  return (
    <div className="App">
      <h1 className="heading">25 + 5 Clock</h1>

      <CircularTimer
        timeLeft={timeLeft}
        timerType={timerType}
        isActive={isActive}
        circleDasharray={circleDasharray}
        progressIndicatorColor={progressIndicatorColor}
      />

      <div className="timer-length-controllers-wrapper">
        <TimerLengthController
          type="session"
          length={sessionLength}
          isActive={isActive}
          handleLength={handleSessionLength}
        />

        <TimerLengthController
          type="break"
          length={breakLength}
          isActive={isActive}
          handleLength={handleBreakLength}
        />
      </div>

      <div className="start-stop-reset-btn-wrapper">
        <button
          id="start_stop"
          className="btn start-stop-btn"
          onClick={toggleStartStop}
        >
          {startStopBtn}
        </button>

        <button id="reset" className="btn reset-btn" onClick={reset}>
          Reset
        </button>
      </div>

      <audio id="beep" src={alarm} />
    </div>
  );
}

export default App;
