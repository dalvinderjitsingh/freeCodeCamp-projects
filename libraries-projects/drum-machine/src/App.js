import React, { useState, useEffect } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";
import Kick from "./audio/drums/Cymatics - Dubstep Kick 2 - C.wav";
import Snare from "./audio/drums/Cymatics - Ultimate Snare 36 - G.wav";
import ClosedHiHat from "./audio/drums/Cymatics - Master Collection Vol 2 Closed Hihat 1.wav";
import OpenHiHat from "./audio/drums/Cymatics - Master Collection Open Hihat 2.wav";
import Tom1 from "./audio/drums/Cymatics - Terror Tom 002.wav";
import Tom2 from "./audio/drums/Cymatics - Terror Tom 018.wav";
import Clap from "./audio/drums/Cymatics - Dubstep Clap 1.wav";
import Crash from "./audio/drums/Cymatics - Master Collection Vol 2 Crash 1.wav";
import SynthOneShot1 from "./audio/synths/Cymatics - Bass One Shot 51 - F.wav";
import SynthOneShot2 from "./audio/synths/Cymatics - Bass One Shot 60 - G.wav";
import SynthOneShot3 from "./audio/synths/Cymatics - Dubstep Growl 1 - D.wav";
import SynthOneShot4 from "./audio/synths/Cymatics - Dubstep Growl 5 - F.wav";
import SynthOneShot5 from "./audio/synths/Cymatics - Raptor Bass One Shot 15 - D.wav";
import SynthOneShot6 from "./audio/synths/Cymatics - Terror Bass E 043.wav";
import SynthOneShot7 from "./audio/synths/Cymatics - Titan Synth One Shot 17 - D.wav";
import SynthOneShot8 from "./audio/synths/Cymatics - Titan Synth One Shot 71 - G.wav";

function App() {
  const [audio, setAudio] = useState({
    kick: Kick,
    snare: Snare,
    closedHiHat: ClosedHiHat,
    openHiHat: OpenHiHat,
    tom1: Tom1,
    tom2: Tom2,
    clap: Clap,
    crash: Crash,
    synthOneShot1: SynthOneShot1,
    synthOneShot2: SynthOneShot2,
    synthOneShot3: SynthOneShot3,
    synthOneShot4: SynthOneShot4,
    synthOneShot5: SynthOneShot5,
    synthOneShot6: SynthOneShot6,
    synthOneShot7: SynthOneShot7,
    synthOneShot8: SynthOneShot8
  });

  useEffect(() => {
    document.addEventListener("keydown", (event) => handleKeyDown(event));
    document.addEventListener("keyup", (event) => handleKeyUp(event));
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydup", handleKeyUp);
    };
  });

  let timeoutID = null;

  function playAudioAndChangeDisplay(audio) {
    // PLAY AUDIO

    audio.currentTime = 0;
    audio.play();

    // DISPLAY THE TITLE OF THE AUDIO BEING PLAYED

    let parentId = audio.parentElement.id;
    // Add space before capital letters and numbers and remove whitespace before and after
    let audioTitle = parentId.replace(/([A-Z0-9])/g, " $1").trim();
    let display = document.getElementById("display");
    display.innerHTML = audioTitle;

    // DISPLAY AN EMOJI 1 SECOND AFTER AUDIO IS PLAYED

    // If another audio is played before the end of previous timer then cancel the previous timer
    if (timeoutID) {
      clearTimeout(timeoutID); // Cancel the previous timer
      timeoutID = null;
    }
    // Set 1 second timer then display emoji
    timeoutID = setTimeout(() => {
      display.innerHTML = "&#127925;";
    }, 1000);
  }

  // JS version of the CSS :active selector for keypresses
  function changeClass(audio, unwantedClass, wantedClass) {
    let drumPad = document.getElementById(audio.parentElement.id);
    drumPad.classList.remove(unwantedClass);
    drumPad.classList.add(wantedClass);
  }

  function handleKeyDown(event) {
    let audio = document.getElementById(event.key.toUpperCase());
    if (audio) {
      changeClass(audio, "inactive", "active");
      playAudioAndChangeDisplay(audio);
    }
  }

  function handleKeyUp(event) {
    let audio = document.getElementById(event.key.toUpperCase());
    if (audio) {
      changeClass(audio, "active", "inactive");
    }
  }

  function handleClick(theKey) {
    let audio = document.getElementById(theKey);
    playAudioAndChangeDisplay(audio);
  }

  return (
    <div className="App">
      <h1>Dubstep Drum Machine</h1>
      <div id="drum-machine">
        <p id="display">&#127925;</p>

        <div className="drum-pad-container">
          <div className="firstRow">
            <DrumPad
              audioTitle="SynthOneShot1"
              theKey="1"
              link={audio.synthOneShot1}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot2"
              theKey="2"
              link={audio.synthOneShot2}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot3"
              theKey="3"
              link={audio.synthOneShot3}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot4"
              theKey="4"
              link={audio.synthOneShot4}
              handleClick={handleClick}
            />
          </div>

          <div className="secondRow">
            <DrumPad
              audioTitle="SynthOneShot5"
              theKey="Q"
              link={audio.synthOneShot5}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot6"
              theKey="W"
              link={audio.synthOneShot6}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot7"
              theKey="E"
              link={audio.synthOneShot7}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="SynthOneShot8"
              theKey="R"
              link={audio.synthOneShot8}
              handleClick={handleClick}
            />
          </div>

          <div className="thirdRow">
            <DrumPad
              audioTitle="Tom1"
              theKey="A"
              link={audio.tom1}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="Tom2"
              theKey="S"
              link={audio.tom2}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="Clap"
              theKey="D"
              link={audio.clap}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="Crash"
              theKey="F"
              link={audio.crash}
              handleClick={handleClick}
            />
          </div>

          <div className="fourthRow">
            <DrumPad
              audioTitle="Kick"
              theKey="Z"
              link={audio.kick}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="Snare"
              theKey="X"
              link={audio.snare}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="ClosedHiHat"
              theKey="C"
              link={audio.closedHiHat}
              handleClick={handleClick}
            />
            <DrumPad
              audioTitle="OpenHiHat"
              theKey="V"
              link={audio.openHiHat}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
