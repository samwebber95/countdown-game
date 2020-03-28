import React from "react";

function Answers({ answer, answers, setAnswer, setAnswers }) {
  function handleKeyDown(event) {
    if (event.key === "enter") {
      displayAnswer();
    }
  }

  function displayAnswer(answer) {
    setAnswers([...answers, answer]);
    console.log(answer);
  }

  function handleChange(event) {
    setAnswer(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <input
        onClick={handleKeyDown}
        onChange={handleChange}
        value={answer}
        type="text"
        placeholder="Answer here"
      ></input>
      <p>{answers}</p>
      <p>{answer}</p>
    </>
  );
}

export default Answers;
