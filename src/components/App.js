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

    // Remove common characters one occurrence at a time
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const matchIndex = arr2.indexOf(arr1[i]);
      if (matchIndex !== -1) {
        arr1[i] = null;
        arr2[matchIndex] = null;
      }
    }

    const remaining1 = arr1.filter((c) => c !== null);
    const remaining2 = arr2.filter((c) => c !== null);
    const m = remaining1.length + remaining2.length;

    let flames = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Sibling",
    ];
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
          data-testid="input1"
          name="name1"
        />
        <input
          type="text"
          placeholder="Enter second name"
          onChange={(e) => setSecondName(e.target.value)}
          data-testid="input2"
          name="name2"
        />
        <button
          type="submit"
          onClick={CalculateFlames}
          data-testid="calculate_relationship"
          name="calculate_relationship"
        >
          Calculate Relationship Future
        </button>
        <button
          type="reset"
          onClick={() => {
            setFirstName("");
            setSecondName("");
            setResult("");
          }}
          data-testid="clear"
          name="clear"
        >
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
