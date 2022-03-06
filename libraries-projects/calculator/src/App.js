import React, { useState } from "react";
import "./App.css";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("0");
  const [mathOperation, setMathOperation] = useState();

  // ALL CLEAR
  function handleAllClear() {
    setCurrentOperand("0");
    setPreviousOperand("");
  }

  // CLEAR LAST ENTRY
  function handleClearLastEntry() {
    setCurrentOperand("0");
  }

  // DELETE
  function handleDelete() {
    if (currentOperand.slice(0, -1) === "") {
      setCurrentOperand("0");
    } else {
      setCurrentOperand((prevState) => {
        return prevState.slice(0, -1);
      });
    }
  }

  // MATH OPERATIONS
  function handleMathOperation(operand) {
    // Check negation and decimal without numbers
    if (currentOperand === "-" || currentOperand === ".") {
      return;
    }

    // Check if operand ends with decimal
    if (currentOperand.charAt(currentOperand.length - 1) === ".") {
      setCurrentOperand((prevState) => {
        return prevState.slice(0, -1);
      });
      return;
    }

    if (previousOperand.includes("=") || previousOperand.length <= 1) {
      setMathOperation(operand);
      setPreviousOperand(currentOperand + " " + operand);
      setCurrentOperand("0");
      return;
    } else if (previousOperand.length > 1 && currentOperand === "0") {
      setMathOperation(operand);
      setPreviousOperand((prevState) => {
        return prevState.slice(0, -1) + " " + operand;
      });
      return;
    } else if (previousOperand.length > 1) {
      calculate(operand);
      return;
    }
  }

  // NUMBERS
  function handleNumber(operand) {
    if (currentOperand === "0") {
      setCurrentOperand(operand);
    } else {
      setCurrentOperand((prevState) => {
        return prevState + operand;
      });
    }
  }

  // NEGATE
  function handleNegation() {
    if (currentOperand === "0") {
      setCurrentOperand("-");
    } else if (currentOperand === "-") {
      setCurrentOperand("0");
    } else if (currentOperand.charAt(0) === "-") {
      setCurrentOperand(currentOperand.slice(1));
    } else {
      setCurrentOperand("-" + currentOperand);
    }
  }

  // DECIMAL
  function handleDecimal(operand) {
    if (currentOperand.includes(".")) {
      return;
    } else {
      handleNumber(operand);
    }
  }

  // CALCULATE
  function calculate(operand) {
    // Check for negation and decimal without numbers
    if (currentOperand === "-" || currentOperand === ".") {
      setCurrentOperand("0");
      return;
    }

    // Check if operand ends with decimal
    if (currentOperand.charAt(currentOperand.length - 1) === ".") {
      setCurrentOperand((prevState) => {
        return prevState.slice(0, -1);
      });
      return;
    }

    let s = previousOperand;
    s = s.substring(0, s.indexOf(" "));
    const prev = parseFloat(s);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    let computation = "";

    switch (mathOperation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }

    computation = Math.round((computation + Number.EPSILON) * 10000) / 10000;
    computation = computation.toString();

    if (operand !== "=") {
      setMathOperation(operand);
      setPreviousOperand(computation + " " + operand);
      setCurrentOperand("0");
    } else {
      setPreviousOperand((prevState) => {
        return prevState + " " + currentOperand + " = ";
      });
      setCurrentOperand(computation);
    }
  }

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="calculator-edge">
          <div className="calculator">
            <div className="output">
              <p className="previous-operand">{previousOperand}</p>
              <p id="display" className="current-operand">
                {currentOperand}
              </p>
            </div>

            {/* ROW 1 */}
            <button
              id="clear"
              className="ac-btn pushable"
              onClick={() => handleAllClear("AC")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">AC</span>
            </button>

            <button
              id="clearLastEntry"
              className="ce-btn pushable"
              onClick={() => handleClearLastEntry("CE")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">CE</span>
            </button>

            <button
              id="delete"
              className="del-btn pushable"
              onClick={() => handleDelete("D")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">DEL</span>
            </button>

            <button
              id="divide"
              className="math-opp-btn pushable"
              onClick={() => handleMathOperation("÷")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">÷</span>
            </button>
            {/* ROW 1 END */}

            {/* ROW 2 */}
            <button
              id="seven"
              className="num-btn pushable"
              onClick={() => handleNumber("7")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">7</span>
            </button>

            <button
              id="eight"
              className="num-btn pushable"
              onClick={() => handleNumber("8")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">8</span>
            </button>

            <button
              id="nine"
              className="num-btn pushable"
              onClick={() => handleNumber("9")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">9</span>
            </button>

            <button
              id="multiply"
              className="math-opp-btn pushable"
              onClick={() => handleMathOperation("x")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">x</span>
            </button>
            {/* ROW 2 END */}

            {/* ROW 3 */}
            <button
              id="four"
              className="num-btn pushable"
              onClick={() => handleNumber("4")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">4</span>
            </button>

            <button
              id="five"
              className="num-btn pushable"
              onClick={() => handleNumber("5")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">5</span>
            </button>

            <button
              id="six"
              className="num-btn pushable"
              onClick={() => handleNumber("6")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">6</span>
            </button>

            <button
              id="subtract"
              className="math-opp-btn pushable"
              onClick={() => handleMathOperation("-")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">-</span>
            </button>
            {/* ROW 3 END */}

            {/* ROW 4 */}
            <button
              id="one"
              className="num-btn pushable"
              onClick={() => handleNumber("1")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">1</span>
            </button>

            <button
              id="two"
              className="num-btn pushable"
              onClick={() => handleNumber("2")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">2</span>
            </button>

            <button
              id="three"
              className="num-btn pushable"
              onClick={() => handleNumber("3")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">3</span>
            </button>

            <button
              id="add"
              className="math-opp-btn pushable"
              onClick={() => handleMathOperation("+")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">+</span>
            </button>
            {/* ROW 4 END */}

            {/* ROW 5 */}
            <button
              id="negate"
              className="negate-btn pushable"
              onClick={() => handleNegation("±")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">±</span>
            </button>

            <button
              id="zero"
              className="num-btn pushable"
              onClick={() => handleNumber("0")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">0</span>
            </button>

            <button
              id="decimal"
              className="decimal-btn pushable"
              onClick={() => handleDecimal(".")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">.</span>
            </button>

            <button
              id="equals"
              className="equals-btn pushable"
              onClick={() => calculate("=")}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">=</span>
            </button>
            {/* ROW 5 END */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
