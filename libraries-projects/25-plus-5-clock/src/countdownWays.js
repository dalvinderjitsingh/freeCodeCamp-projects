// OPTION 1
// from: https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

function option1() {
  // Global
  let minute = 5;
  let second = 0;

  let displayMinute = null
  let displaySecond = null

  let intervalID = setInterval(countdown1, 1000);

  function countdown1() {
    second--;

    if (second < 0) {
      minute--;
      second = 59;
    }

    displayMinute = minute < 10 ? "0" + minute : minute;
    displaySecond = second < 10 ? "0" + second : second;

    document.getElementById("timer").innerHTML =
      displayMinute + " : " + displaySecond;

    if (second === 0 && minute === 0) {
      // SET TIMER TO 00:00 (Done above) 
      // END TIMER  / CLEAR INTERVAL (Done)
      clearInterval(intervalID)
      // JUMP TO NEXT SESSION (Only for Pomodoro app, for basic ways no need)
    }
  }
}


// OPTION 2
// from: https://www.youtube.com/watch?v=x7WJEmxNlEs



// MEMENTO
// first way i tried to create the timer:
if (timerStatus === "paused") {
  minute = minutesLeft;
  second = secondsLeft;
} else {
  minute = sessionLength; //must toggle between session and break using timerType state
  second = 0;
}

if (timerStatus === "started") {
  setTimerStatus("paused")
  setMinutesLeft(minute);
  setSecondsLeft(second);
  clearInterval(storedIntervalID);
  setStoredIntervalId(null);
} else {
  setTimerStatus("started")
  intervalID = setInterval(countdown1, 1000);
  setStoredIntervalId(intervalID);
}



// useEffect change

function startStop() {
  // Global
  let minute;
  let second;
  let displayMinute;
  let displaySecond;
  let intervalID;

  console.log("minutesLeft: " + minutesLeft + " | secondsLeft: " + secondsLeft)
  console.log(isTimerRunning);
  setIsTimerRunning((prevState) => !prevState); //first in useState will be false then each button click will toggle it
  console.log(isTimerRunning);

  if (isTimerRunning) {
    if (minutesLeft !== null) {
      //there is stored minutes therefore the timer was started before
      minute = minutesLeft;
      second = secondsLeft;
    } else {
      //there is no stored minutes so the session length is used as the starting minute
      minute = 25; //must toggle between session and break using timerType state
      second = 0;
    }
    intervalID = setInterval(countdown, 1000);
    setStoredIntervalId(intervalID);
  } else {
    setMinutesLeft(minute);
    setSecondsLeft(second);
    clearInterval(storedIntervalID);
    setStoredIntervalId(null);
  }

  function countdown() {
    second--;

    if (second < 0) {
      minute--;
      second = 59;
    }

    displayMinute = minute < 10 ? "0" + minute : minute;
    displaySecond = second < 10 ? "0" + second : second;
    setTimeLeft(displayMinute + ":" + displaySecond);

    if (second === 0 && minute === 0) {
      // END TIMER  / CLEAR INTERVAL (Done)
      clearInterval(intervalID);
      setMinutesLeft(null);
      setSecondsLeft(null);
      // JUMP TO NEXT SESSION (Only for Pomodoro app, for basic ways no need)
    }
  }
}