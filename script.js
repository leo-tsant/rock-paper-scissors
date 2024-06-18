// Function to generate the computer's choice
const getComputerChoice = () => {
  let computerChoice = Array("Rock", "Paper", "Scissors");
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// Function to determine the winner of a round
const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "draw";

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
};

// Function to reset the game
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
};

// Scores
let computerScore = 0;
let playerScore = 0;

// Function to play a round of the game
const playGame = (playerChoice) => {
  const computerChoice = getComputerChoice(); // Get the computer's choice
  const winner = determineWinner(playerChoice, computerChoice); // Determine the winner

  // Update the score based on the winner
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  const resultsDiv = document.getElementById("results");

  // Display the results
  if (winner === "player" || winner === "computer") {
    resultsDiv.innerHTML = `
    Player chose ${playerChoice}, Computer chose ${computerChoice}.<br>
    Player: ${playerScore}, Computer: ${computerScore}
  `;
  } else {
    resultsDiv.innerHTML = `
    Draw.<br>
    Player: ${playerScore}, Computer: ${computerScore}
  `;
  }

  // Check if someone has reached 5 wins
  if (playerScore === 5) {
    resultsDiv.innerHTML += "<br>Player wins the game!";
    resetGame(); // Reset the scores
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += "<br>Computer wins the game!";
    resetGame(); // Reset the scores
  }
};

document.getElementById("rock").addEventListener("click", function () {
  playGame("Rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playGame("Paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playGame("Scissors");
});
