import React, { useState } from "react";
import "./App.css";
import Display from "../Display/index";
import Answers from "../Answers/index";
import RachelRiley from "../RachelRiley/index";
import Timer from "../Timer/index";
// import DisplayList from "../DisplayList/DisplayList";

function App() {
  const [letters, setLetters] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  function addToList(newItem) {
    setAnswers([...answers, newItem]);
  }

  return (
    <div className="App">
      <Display letters={letters} setLetters={setLetters} />
      <Answers
        answer={answer}
        answers={answers}
        setAnswer={setAnswer}
        setAnswers={setAnswers}
        addToList={addToList}
      />
      {/* <DisplayList answers={answers} /> */}
      <RachelRiley letters={letters} />
      <Timer letters={letters} />
    </div>
  );
}

export default App;

//<AnswerDisplay answer={answer} answers={answers} />
