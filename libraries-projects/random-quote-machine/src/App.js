import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
        setLoading(false);
      } catch (error) {
        console.log("API FETCH ERROR!");
        console.log(error);
      }
    }
    fetchData();
  }, [count]);

  return (
    <div className="App">
      <div id="quote-box" className="card shadow-lg m-1">
        <div className="card-header">
          <h1 className="card-title text-center">Random Quote Machine</h1>
        </div>

        <div className="card-body">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <blockquote className="blockquote mb-0">
              <p id="text" className="card-text">
                {quote}
              </p>
              <footer
                id="author"
                className="blockquote-footer card-text text-end"
              >
                {author}
              </footer>
            </blockquote>
          )}
        </div>

        <div className="card-footer">
          <a
            id="tweet-quote"
            className="card-link btn btn-primary"
            href={
              'https://twitter.com/intent/tweet?text="' +
              quote +
              '" - ' +
              author
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i> Tweet
          </a>
          <button
            id="new-quote"
            className="btn btn-primary text-end float-end"
            type="button"
            onClick={() => setCount(count + 1)}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
