import React, { useState } from "react";

function App() {
  const [myText, changeName] = useState("Hello");
  const [isOver, changeState] = useState(false);
  function changeText() {
    changeName("Submitted");
  }
  function mouseOver() {
    changeState(true);
  }
  function mouseLeave() {
    changeState(false);
  }
  return (
    <div className="container">
      <h1>{myText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: isOver ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onClick={changeText}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
