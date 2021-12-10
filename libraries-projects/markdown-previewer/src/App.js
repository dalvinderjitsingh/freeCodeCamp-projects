import React, { useState, useEffect } from "react";
import ModalBox from "./components/ModalBox";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Button from "./components/Button";
import "./App.css";
import "./index.css";
import "github-markdown-css";

export default function App() {
  const [markdown, setMarkdown] = useState(
    !localStorage.getItem("storedMarkdown")
      ? placeholder
      : localStorage.getItem("storedMarkdown")
  );

  const [darkMode, setDarkMode] = useState(
    !localStorage.getItem("storedDarkMode")
      ? false
      : JSON.parse(localStorage.getItem("storedDarkMode"))
  );

  const [toggleTab, setToggleTab] = useState(true);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem("storedMarkdown", markdown);
    } else {
      console.log("localStorage unavailable");
    }
  }, [markdown]);

  useEffect(() => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem("storedDarkMode", darkMode);
    } else {
      console.log("localStorage unavailable");
    }
  }, [darkMode]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(markdown);
    alert("Your markdown has been copied to your clipboard.");
  };

  return (
    <div className={`DARK-MODE-WRAPPER ${darkMode && "dark"}`}>
      <div className="App h-screen font-sans bg-gray-50 dark:bg-gray-900 text-black dark:text-gray-100 transition-all duration-300 ease-linear">
        {/* NAV BAR */}
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* NAV BAR END */}

        <div className="relative">
          {/* TABS AND BUTTONS CONTAINER */}
          <div className="flex justify-between ">
            {/* TABS */}
            <div className=" flex items-end mt-4 mx-4 lg:w-tab-area-w lg:justify-between">
              {/* EDITOR TAB */}
              <Tab
                toggleClass={
                  toggleTab
                    ? "bg-white border-b-0 border opacity-100  active:bg-gray-50 dark:bg-gray-800 p-2"
                    : "bg-gray-300 px-2 py-1 border-b opacity-75 active:bg-gray-400 dark:bg-gray-700 dark:active:bg-gray-800 "
                }
                handleClick={() => setToggleTab(true)}
              >
                Editor
              </Tab>
              {/* EDITOR TAB END */}

              {/* PREVIEWER TAB */}
              <Tab
                toggleClass={
                  toggleTab
                    ? "bg-gray-300 px-2 py-1 border-b opacity-75 active:bg-gray-400 dark:bg-gray-700 dark:active:bg-gray-800"
                    : "bg-white border-b-0 border opacity-100  active:bg-gray-50 dark:bg-gray-800 p-2"
                }
                handleClick={() => setToggleTab(false)}
              >
                Previewer
              </Tab>
              {/* PREVIEWER TAB END */}
            </div>
            {/* TABS END */}

            {/* CHEAT SHEET AND COPY TO CLIPBOARD BUTTONS */}
            <div className="mt-4 mx-4 flex">
              {/* CHEAT SHEET BUTTON*/}
              <Button
                displayTooltip={true}
                aria="tooltip2"
                handleClick={() => setShowModal(true)}
                tooltipId="tooltip2"
                tooltipInfo="Markdown cheat&nbsp;sheet"
                icon="description"
                addClass="mr-4"
              />
              {/* CHEAT SHEET BUTTON END*/}

              {/* CHEAT SHEET MODAL BOX */}
              <ModalBox
                showModal={showModal}
                setShowModal={setShowModal}
                darkMode={darkMode}
              />
              {/* CHEAT SHEET MODAL BOX END */}

              {/* COPY TO CLIPBOARD BUTTON */}
              <Button
                displayTooltip={true}
                aria="tooltip3"
                handleClick={copyToClipboard}
                tooltipId="tooltip3"
                tooltipInfo="Copy markdown"
                icon="content_copy"
              />
              {/* COPY TO CLIPBOARD BUTTON */}
            </div>
            {/* CHEAT SHEET AND COPY TO CLIPBOARD BUTTONS END */}
          </div>
          {/* TABS AND BUTTONS CONTAINER END*/}

          {/* EDITOR AND PREVIEWER CONTAINER */}
          <div className="lg:grid lg:grid-cols-1fr2x">
            {/* EDITOR */}
            <Editor
              toggleTab={toggleTab}
              darkMode={darkMode}
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
            {/* EDITOR END */}

            {/* PREVIEWER */}
            <Previewer
              toggleTab={toggleTab}
              darkMode={darkMode}
              markdown={markdown}
            />
            {/* PREVIEWER END*/}
          </div>
          {/* EDITOR AND PREVIEWER CONTAINER END */}
        </div>
      </div>
    </div>
  );
}

// Markdown placeholder
const placeholder = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Detects whether localStorage is both supported and available
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
