document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors"]; //making variables (this [this is array])
  const buttons = document.querySelectorAll("#buttons button"); // buttons by id making it variables so can use it in a function as strings.

  const player1 = document.getElementById("player1"); // Player (User)
  const player2 = document.getElementById("player2"); // Computer (Opponent)

  const winDiv = document.getElementById("win");
  const loseDiv = document.getElementById("lose");
  const drawDiv = document.getElementById("draw");
  const buttonsDiv = document.getElementById("buttons");

  //first function used for getting computer choices
  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; //const choices variable from there ,add a function , return math random
  }

  //function 2
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      drawDiv.classList.remove("hidden"); // It's a draw
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
      winDiv.classList.remove("hidden"); // Player wins
    } else {
      loseDiv.classList.remove("hidden"); // Player loses
    }
  }
  //function 3
  function playRound(playerChoice) {
    // Reset visibility
    winDiv.classList.add("hidden");
    loseDiv.classList.add("hidden");
    drawDiv.classList.add("hidden");

    // Disable buttons during animation
    buttonsDiv.classList.add("disabled");

    // Set default shake hand before revealing choices
    player1.className = "player shake";
    player2.className = "player shake";

    setTimeout(() => {
      // Get random computer choice
      const computerChoice = getComputerChoice();

      // Remove shake and update hand images
      player1.className = `player ${playerChoice}`;
      player2.className = `player ${computerChoice}`;
      //function
      // Determine winner
      determineWinner(playerChoice, computerChoice);

      // Re-enable buttons
      buttonsDiv.classList.remove("disabled");
    }, 1800); // Matches shake animation duration
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = this.classList[0]; // Gets "rock", "paper", or "scissors"
      playRound(playerChoice);
    });
  });
});
