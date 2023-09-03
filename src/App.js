/* eslint no-eval: 0 */
import { useState } from "react";
import Number from "./components/Number";
import Screen from "./components/Screen";
import "./styles/style.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
function App() {
  const [equation, setEquation] = useState("");
  function renderButtons() {
    return btnValues
      .flat()
      .map((btn, i) => (
        <Number
          pname={btn}
          pvalue={i}
          action={(e) => onButtonClick(e.target.name)}
        ></Number>
      ));
  }
  function onButtonClick(value) {
    switch (value) {
      case "C" || "CE":
        setEquation("");
        break;
      case "=":
        try {
          setEquation(eval(equation));
        } catch (e) {
          setEquation("Error!");
        }

        break;
      default:
        if (equation === "Error!") {
          setEquation(value);
        } else {
          setEquation(equation + value);
        }
    }
  }

  return (
    <>
      <div className="center">
        <div className="calculator-body">
          <h1>Calculator</h1>
          <Screen answer={equation} />
          <div className="button">{renderButtons()}</div>
        </div>
      </div>
    </>
  );
}

export default App;
