import React from "react";

function Display({ letters, setLetters }) {
  function getVowel() {
    const vowels = ["a", "e", "i", "o", "u"];
    const randomVowel = Math.floor(Math.random() * vowels.length);
    return setLetters(...vowels, vowels[randomVowel]);
  }

  return (
    <div>
      <h1>Welcome to COUNTDOWN</h1>
      <h2>{letters}</h2>
      <button onClick={getVowel}>Vowel</button>
      <button>Consenant</button>
    </div>
  );
}

export default Display;
