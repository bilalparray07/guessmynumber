"use strict";
//
// get highscore from local storage
let highScore = localStorage.getItem("highScore");
///conveting highscore value to number
highScore = Number(highScore);
///get the highscore dom element
let highScoreElm = document.querySelector(".highscore");
highScoreElm.textContent = highScore;
// Get access to DOM elements
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let scoreUp = 20;
// Show the random number in the HTML
let number = document.querySelector(".number");

// Generate the random number (between 1 and 2)
let randomNumber = Math.floor(Math.random() * 20) + 1;

///starting the event listerner on check button
document.querySelector(".check").addEventListener("click", () => {
  // Declare variables and get the input value
  let guess = document.querySelector(".guess");
  let guessedValued = Number(guess.value);
  //check if the guess value is mpty
  if (!guess.value) {
    message.textContent = "No number Inserted";
    return;
  }

  // Compare the input value with the random number
  if (guessedValued === randomNumber) {
    ///if if the guessed number is correct
    document.body.style.backgroundColor = "green";
    score.innerHTML = scoreUp;
    number.textContent = randomNumber;
    message.textContent = "Your guess is correct!";

    if (scoreUp > highScore) {
      ///if the score is greater than highscore then update the highscore
      localStorage.setItem("highScore", scoreUp);
      highScoreElm.textContent = highScore;
    }
    highScoreElm.textContent = highScore;
  } else if (guessedValued > randomNumber) {
    ////if guessed value is greater than randomnumber
    message.textContent = "Your guess is too High";
    scoreUp--;
    score.innerHTML = scoreUp;
  } else if (guessedValued < randomNumber) {
    ///if the guessed value is smaller than random number
    message.textContent = "Your guess is too Low";
    scoreUp--;
    score.innerHTML = scoreUp;
  } else {
    ///if any thing else happens then display error
    message.textContent = "Some error occurred";
    guess.value = "";
  }
});

// paly again
let again = document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
