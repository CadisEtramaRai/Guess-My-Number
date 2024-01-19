"use strict";

// secretNumber
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 10;
// let highscore = 0;

// //event listener for check button
// document.querySelector(".check").addEventListener("click", function () {
//   let guess = Number(document.querySelector(".guess").value);

//   if (!guess) {
//     document.querySelector(".message").textContent =
//       "🔢 Provide a valid number";
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "🍾 Congrats you win";
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector("body").style.backgroundColor = "green";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = score;
//     }
//   } else if (guess < 1 || guess > 20) {
//     document.querySelector(".message").textContent =
//       "the number entered is not between 1 and 20!!";
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Number too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 you lose the game!";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "red";
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Number too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 you lose the game";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "red";
//     }
//   }
// });

// // event listener for again button
// document.querySelector(".again").addEventListener("click", function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 10;
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = " ";
// });

// Refactoring the code
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//
let displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
//
let displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
//
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
//
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🔢 Provide a valid number");
  } else if (guess === secretNumber) {
    displayMessage("🍾 Congrats you win");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < 1 || guess > 20) {
    displayMessage("the number entered is not between 1 and 20!!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 you lose the game!");
      displayScore(0);
      document.querySelector("body").style.backgroundColor = "red";
      displayNumber(secretNumber);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
});
