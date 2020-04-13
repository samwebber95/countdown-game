import React, { useState } from "react";
import css from "./Answers.modules.css";
import Score from "../Score/index";

function Answers({
  answer,
  answers,
  setAnswer,
  addToList,
  letters,
  setLetters,
  setAnswers
}) {
  // const [text, setText] = useState("");
  const [roundScore, setRoundScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // compare newItem to allowedLetters
  function regex() {
    const allowedLetters = "^[A-Za-z]g+$";
    if (answer.includes(allowedLetters)) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
  }

  function handleChange(event) {
    setAnswer(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
      handleRoundScore();
      regex();
    }
  }

  function handleClick() {
    addToList(answer);
    setAnswer("");
  }

  function handleRoundScore() {
    setRoundScore(answers.length);
  }

  function handleTotalScore() {
    setTotalScore(roundScore + totalScore);
  }

  function nextRound() {
    // add round score to total score
    handleTotalScore();
    // reset round score to 0
    setRoundScore(0);
    // clear the answers list
    setAnswers([]);
    // clear the letters list
    setLetters("");
    // possibly reset the timer
  }

  return (
    <div>
      <input
        onKeyPress={handleKeyDown}
        onChange={handleChange}
        value={answer}
        type="text"
        placeholder="Answer here"
      ></input>
      <ul className={css.answers}>
        {answers.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
      <Score roundScore={roundScore} totalScore={totalScore} />
      <button onClick={nextRound}>Next Round</button>
    </div>
  );
}

export default Answers;

// SCORING SYSTEM
// The length of the array will be the score for a player

// function handleKeyDown(event) {
//   if (event.key === "enter") {
//     displayAnswer();
//   }
// }

// function displayAnswer(answer) {
//   setAnswers([...answers, answer]);
//   console.log(answers);
// }

// function handleChange(event) {
//   setAnswer(event.target.value);
// }

// function handleClick() {
//   addToList(text);
//   setText("");
// }
