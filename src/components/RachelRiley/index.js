import React from "react";
import css from "./index.module.css";

function RachelRiley({ letters }) {
  return (
    <div>
      <img
        className={css.hostImage}
        src="https://fanclub.org.uk/wpimages/wp2fe9c22b_06.png"
        alt="Rachel Riley"
      ></img>

      <img
        className={css.hostSpeechBubble}
        src="https://clipartmag.com/images/empty-speech-bubble-5.png"
        alt="speech"
      ></img>
    </div>
  );
}

export default RachelRiley;
