COUNTDOWN GAME

COMPONENTS

- APP
- DISPLAY GAME

  - [x] 2 BUTTONS VOWELS / CONSENANTS
  - [x] list to display set of letters of 8
  - [x] CLEAR BOARD button, set state to ([])

- TIMER

  - [x] STATE: isRunning when 8th letter is picked
  - [x] 60 seconds
  - [x] only allow players to enter there answers when the timer is running
  - [] timer starts automatically when letters.length === 8

- ANSWERS

  - [x] input field for answers - done
  - [x] on enter submit answer to empty array (state answers)

  - [] regex only allowing letters to be entered that are in the array
    - [] this will all be taken care of in the ANSWERS component
    - [] 1) only allow lowercase/uppercase letters
    - [] 2) only allow letters from 'letters' state/array to be used

- SCORES
  - [x] display score
  - [x] at end of round, add round score to total score
  - [x] nextRound refreshes round score to 0 and clears letters, resets timer.
  - [x] only allow players to enter input if letters is = 8

STRETCH GOALS

- [] add a scoring system that measures the length of each item in the array and gives points accordingly e.g 1 point per letter
- [] check if it is a word, try and find an API that will check if it's a real word
- [] add sockets so that it becomes a multiplayer game
