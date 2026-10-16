import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [result, setResult] = useState("");

  const CalculateFlames = (e) => {
    e.preventDefault();
    if (firstName === "" || secondName === "") {
      alert("Please Enter valid inputs");
      return;
    }
    const str1 = firstName.toLocaleLowerCase().trim();
    const str2 = secondName.toLocaleLowerCase().trim();
    let flames = [
      "Sibling",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    const m = str1.length + str2.length;
    const index = m % 6;
    setResult(flames[index]);
  };

  return (
    <div id="main">
      <form>
        <input
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second name"
          onChange={(e) => setSecondName(e.target.value)}
        />
        <button type="submit" onClick={CalculateFlames}>
          Calculate Relationship Future
        </button>
        <button
          type="reset"
          onClick={() => {
            setFirstName("");
            setSecondName("");
            setResult("");
          }}
        >
          Clear
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
