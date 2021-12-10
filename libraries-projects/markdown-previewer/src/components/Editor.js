import React from "react";
import Toolbar from "./Toolbar/Toolbar";

export default function Editor({ toggleTab, darkMode, markdown, setMarkdown }) {
  return (
    <section
      className={`editor-container max-w-100vw h-full relative pt-0 px-4 pb-4 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-linear       
              lg:block lg:pr-0
              ${toggleTab ? "block" : "hidden"}`}
    >
      {/* MARKDOWN TOOLBAR */}
      <Toolbar darkMode={darkMode} />
      {/* MARKDOWN TOOLBAR END */}

      {/* EDITOR/TEXTAREA */}
      <textarea
        id="editor"
        className={`markdown-body -mt-px h-100vh-133px w-full overflow-auto resize-none outline-none	relative p-3.5 pt-24 border shadow dark:bg-gray-800 dark:border-gray-700 sm:p-11 sm:pt-20 ${
          darkMode ? "markdown-body-dark" : "markdown-body-light"
        }`}
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
        name="w3review"
        autoFocus
        spellCheck="false"
      ></textarea>
      {/* EDITOR/TEXTAREA END*/}
    </section>
  );
}
