// '"use strict";
// let userChoice;
// let compChoice;
// let winner;
// document.querySelector(".rock").addEventListener("click", klikRock);
// document.querySelector(".paper").addEventListener("click", klikPaper);
// 'document.querySelector(".scissors").addEventListener("click", klikScissors);

// function klikRock() {
//   console.log("ROCK");
//   userChoice = "rock";
//   computerChooses();
// }

// function klikPaper() {
//   console.log("PAPER");
//   userChoice = "paper";
//   computerChooses();
// }
// function klikScissors() {
//   console.log("SCISSORS");
//   userChoice = "scissors";
//   computerChooses();
// }

// function computerChooses() {

//   const randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     compChoice = "rock";
//   } else if {randomNumber===1}
// }

// function determineWinner(){
//     if(userChoice===compChoice)
//         winner="none"

// } else {
//     if(userChoice==="rock" && compChoice==="paper"){
//         winner="comp"
//     }else if(compChoice==="scissors" && compChoice==="rock"){
//         winner="user"
//     }else if (userChoice==="paper" compChoice==="rock"){
//         winner="user"
//         if ( userChoice===
//     }

// }

// console.log("the Winner IS:",winner);
// runHandAnimations();

// function runHandAnimations(){
//     document.querySelector("#player1")
// }
let userChoice;
let compChoice;
let winner;

document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

function klikRock() {
  console.log("ROCK");
  userChoice = "rock";
  computerChooses();
}

function klikPaper() {
  console.log("PAPER");
  userChoice = "paper";
  computerChooses();
}

function klikScissors() {
  //f12 calls the function it is related and same key take it back to the call or which element is calling.
  console.log("SCISSORS");
  userChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    compChoice = "rock";
  } else if (randomNumber === 1) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }

  console.log("Computer chooses:", compChoice);
  determineWinner();
}

function determineWinner() {
  if (userChoice === compChoice) {
    winner = "none"; // It's a tie
  } else {
    if (userChoice === "rock" && compChoice === "scissors") {
      winner = "user";
    } else if (userChoice === "scissors" && compChoice === "paper") {
      winner = "user";
    } else if (userChoice === "paper" && compChoice === "rock") {
      winner = "user";
    } else {
      winner = "comp";
    }
  }
  console.log("The Winner is:", winner);
  runHandAnimations();
}

function runHandAnimations() {
  // You can implement animations here for the player's hand (rock, paper, scissors)
  // Example:
  player1.addEventListener("animationend", handAnimationEnd);
  player1.addclassList.remove("shake");
  player2.addclassList.remove("shake");
  if (userChoice === rock) {
    player1.addclassList;
    showWinnerScreen();
  }
}
function showWinnerScreen() {
  //winner screen "hidden" if statements....
  if (winner === "none") {
    //logic banao and then arrange the the code aur phir code theek karo and check it again and again.
  }
}

// remove classes
function cleanUp() {
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}
