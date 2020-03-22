import React from "react";

function Display({ letters, setLetters }) {
  function getVowel() {
    const vowels = ["a", "e", "i", "o", "u"];
    const randomVowel = Math.floor(Math.random() * vowels.length);
    const vowel = vowels[randomVowel];
    // renderLetter(vowel);

    if (letters.length < 8) {
      renderLetter(vowel);
    }
  }

  function getConsonant() {
    const consonants = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    const randomConsonant = Math.floor(Math.random() * consonants.length);
    const consonant = consonants[randomConsonant];
    if (letters.length < 8) {
      renderLetter(consonant);
    }
  }

  function renderLetter(vowel) {
    setLetters([...letters, vowel]);
  }

  function clearBoard() {
    setLetters([]);
  }

  return (
    <div>
      <h1>Welcome to COUNTDOWN</h1>
      <p>{letters}</p>
      <button onClick={clearBoard}>Clear Board</button>
      <button onClick={getVowel}>Vowel</button>
      <button onClick={getConsonant}>Consonant</button>
    </div>
  );
}

export default Display;
