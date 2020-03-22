import React from "react";

function Display({ letters, setLetters }) {
  function getVowel() {
    const vowels = ["a", "e", "i", "o", "u"];
    const randomVowel = Math.floor(Math.random() * vowels.length);
    const vowel = vowels[randomVowel];
    renderLetter(vowel);
  }

  function renderLetter(vowel) {
    setLetters([...letters, vowel]);
  }

  return (
    <div>
      <h1>Welcome to COUNTDOWN</h1>
      <p>{letters}</p>
      <button onClick={getVowel}>Vowel</button>
      <button>Consenant</button>
    </div>
  );
}

export default Display;
