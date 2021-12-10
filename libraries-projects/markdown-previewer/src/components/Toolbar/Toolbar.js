import React from "react";
import "@github/markdown-toolbar-element";
import "./Toolbar.css";

export default function Toolbar({ darkMode }) {
  return (
    // MARKDOWN TOOLBAR
    <div className="toolbar-container z-20 px-8 w-full absolute top-4 left-0 flex justify-center">
      <markdown-toolbar
        for="editor"
        id="toolbar"
        class={`toolbar px-0.5 py-2 bg-white dark:bg-gray-800  flex flex-wrap justify-center divide-x dark:divide-gray-700 border rounded-lg shadow dark:border-gray-700 text-gray-900 dark:text-gray-200
        ${darkMode ? "toolbar-dark" : "toolbar-light"}`}
      >
        <md-bold class="toolbar-item">
          <span class="material-icons">format_bold</span>
        </md-bold>
        <md-italic class="toolbar-item">
          <span class="material-icons">format_italic</span>
        </md-italic>
        <md-strikethrough class="toolbar-item">
          <span class="material-icons">format_strikethrough</span>
        </md-strikethrough>
        <md-header class="toolbar-item">
          <span class="material-icons">format_size</span>
        </md-header>
        <md-quote class="toolbar-item">
          <span class="material-icons">format_quote</span>
        </md-quote>
        <md-code class="toolbar-item">
          <span class="material-icons">code</span>
        </md-code>
        <md-link class="toolbar-item">
          <span class="material-icons">link</span>
        </md-link>
        <md-image class="toolbar-item">
          <span class="material-icons">insert_photo</span>
        </md-image>
        <md-unordered-list class="toolbar-item">
          <span class="material-icons">format_list_bulleted</span>
        </md-unordered-list>
        <md-ordered-list class="toolbar-item">
          <span class="material-icons">format_list_numbered</span>
        </md-ordered-list>
        <md-task-list class="toolbar-item">
          <span class="material-icons">checklist</span>
        </md-task-list>
      </markdown-toolbar>
    </div>
    // MARKDOWN TOOLBAR END
  );
}
