import React, { useEffect, useRef } from "react";
import "../App.css";
import "github-markdown-css";
import Button from "./Button";

export default function ModalBox({ showModal, setShowModal, darkMode }) {
  // Get the modal
  const modalRef = useRef();

  useEffect(() => {
    // When the user click anywhere outside of the modal, close it
    function eventHandler(event) {
      if (event.target === modalRef.current) {
        setShowModal(false);
      }
    }
    document.addEventListener("mousedown", eventHandler);
    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  });

  // Don't return content unless showModal is true
  if (!showModal) {
    return null;
  }

  return (
    // {/* <!-- The Modal --> */}
    <div
      ref={modalRef}
      className="modal fixed z-50 left-0 top-0 w-full h-full bg-black bg-opacity-40"
    >
      {/* <!-- Modal content --> */}
      <div
        className={`markdown-body m-10-auto max-w-480px max-h-67 p-5 border dark:border-gray-700 w-full overflow-auto shadow-2xl ${
          darkMode ? "markdown-body-dark" : "markdown-body-light"
        }`}
      >
        <div className="w-420px">
          <div className="flex justify-between items-center">
            <h1>Markdown cheat sheet</h1>
            {/* Close Button */}
            <Button
              displayTooltip={false}
              handleClick={() => setShowModal(false)}
              icon="close"
            />
            {/* Close Button End */}
          </div>

          <h2>Basic Syntax</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th>Element</th>
                <th>Markdown Syntax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading</td>
                <td>
                  <code># H1</code> <br />
                  <code>## H2</code> <br />
                  <code>### H3</code>
                </td>
              </tr>
              <tr>
                <td>Bold</td>
                <td>
                  <code>**bold text**</code>
                </td>
              </tr>
              <tr>
                <td>Italic</td>
                <td>
                  <code>*italicized text*</code>
                </td>
              </tr>
              <tr>
                <td>Blockquote</td>
                <td>
                  <code>&gt; blockquote</code>
                </td>
              </tr>
              <tr>
                <td>Ordered List</td>
                <td>
                  <code>1. First item</code>
                  <br />
                  <code>2. Second item</code>
                  <br />
                  <code>3. Third item</code>
                </td>
              </tr>
              <tr>
                <td>Unordered List</td>
                <td>
                  <code>- First item</code>
                  <br />
                  <code>- Second item</code>
                  <br />
                  <code>- Third item</code>
                </td>
              </tr>
              <tr>
                <td>Code</td>
                <td>
                  <code>`code`</code>
                </td>
              </tr>
              <tr>
                <td>Horizontal Rule</td>
                <td>
                  <code>---</code>
                </td>
              </tr>
              <tr>
                <td>Link</td>
                <td>
                  <code>[title](https://www.example.com)</code>
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <code>![alt text](image.jpg)</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="pt-4">Extended Syntax</h2>

          <table>
            <thead>
              <tr>
                <th>Element</th>
                <th>Markdown Syntax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Table</td>
                <td>
                  <code>
                    | Syntax | Description |<br />
                    | ----------- | ----------- |<br />
                    | Header | Title |<br />| Paragraph | Text |
                  </code>
                </td>
              </tr>
              <tr>
                <td>Fenced Code Block</td>
                <td>
                  <code>
                    ```
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;"firstName": "John",
                    <br />
                    &nbsp;&nbsp;"lastName": "Smith",
                    <br />
                    &nbsp;&nbsp;"age": 25
                    <br />
                    &#125;
                    <br />
                    ```
                  </code>
                </td>
              </tr>
              <tr>
                <td>Footnote</td>
                <td>
                  <code>Here's a sentence with a footnote. [^1]</code>
                  <br /> <br />
                  <code>[^1]: This is the footnote.</code>
                </td>
              </tr>
              <tr>
                <td>Heading ID</td>
                <td>
                  <code>### My Great Heading &#123;#custom-id&#125;</code>
                </td>
              </tr>
              <tr>
                <td>Definition List</td>
                <td>
                  <code>term</code>
                  <br />
                  <code>: definition</code>
                </td>
              </tr>
              <tr>
                <td>Strikethrough</td>
                <td>
                  <code>~~The world is flat.~~</code>
                </td>
              </tr>
              <tr>
                <td>Task List</td>
                <td>
                  <code>- [x] Write the press release</code>
                  <br />
                  <code>- [ ] Update the website</code>
                  <br />
                  <code>- [ ] Contact the media</code>
                </td>
              </tr>
              <tr>
                <td>Emoji</td>
                <td>
                  <code>Copy and paste the required emoji.</code>
                </td>
              </tr>
              <tr>
                <td>Highlight</td>
                <td>
                  <code>
                    I need to highlight these
                    ==very&nbsp;important&nbsp;words==.
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <small className="pb-2">
            This cheat sheet was derived from:{" "}
            <a
              href="https://www.markdownguide.org/cheat-sheet"
              target="_blank"
              rel="noreferrer"
            >
              www.markdownguide.org/cheat-sheet
            </a>
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
