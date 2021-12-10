import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Previewer({ toggleTab, darkMode, markdown }) {
  return (
    <section
      className={`previewer-container max-w-100vw h-full min-w-full pt-0 px-4 pb-4 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-linear     
        lg:block
        ${!toggleTab ? "block" : "hidden"}`}
    >
      {/* PREVIEWER */}
      <ReactMarkdown
        id="preview"
        className={`markdown-body -mt-px h-100vh-133px min-w-full overflow-auto p-3.5 bg-white border shadow dark:bg-gray-800 dark:border-gray-700 sm:p-11 ${
          darkMode ? "markdown-body-dark" : "markdown-body-light"
        }`}
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={darkMode ? vscDarkPlus : vs}
                customStyle={{ margin: "0", padding: "0" }}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
      {/* PREVIEWER END*/}
    </section>
  );
}
