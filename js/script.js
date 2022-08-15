const move = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // generates a number from the range of 0 through 2 (inclusive)
  let randomNumber = Math.floor(Math.random() * 3)
  return move[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();

  // game logic
  if (playerChoice === "rock" && computerSelection === "rock") {
    // case: rock vs rock
    return "Tie!";
  } else if (playerChoice === "rock" && computerSelection === "paper") {
    // case: rock vs paper
    return "You Lose this round! Paper beats Rock.";
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    // case: rock vs scissors
    return "You Win this round! Rock beats Scissors.";
  } else if (playerChoice === "paper" && computerSelection === "paper") {
    // case: paper vs paper
    return "Tie!";
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    // case: paper vs rock
    return "You Win this round! Paper beats Rock.";
  } else if (playerChoice === "paper" && computerSelection === "scissors") {
    // case: paper vs scissors
    return "You Lose this round! Scissors beats Paper.";
  } else if (playerChoice === "scissors" && computerSelection === "scissors") {
    // case: scissors vs scissors
    return "Tie!";
  } else if (playerChoice === "scissors" && computerSelection === "rock") {
    // case: scissors vs rock
    return "You Lose this round! Rock beats Scissors.";
  } else {
    // case: scissors vs paper
    return "You Win this round! Paper beats Scissors.";
  }
}

/*
 * Returns: 0 if tie
 * 1 if user wins
 * 2 if computer wins
 */
function points(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();

  if (playerChoice === "rock" && computerSelection === "rock") {
    // case: rock vs rock
    return 0;
  } else if (playerChoice === "rock" && computerSelection === "paper") {
    // case: rock vs paper
    return 2;
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    // case: rock vs scissors
    return 1;
  } else if (playerChoice === "paper" && computerSelection === "paper") {
    // case: paper vs paper
    return 0;
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    // case: paper vs rock
    return 1;
  } else if (playerChoice === "paper" && computerSelection === "scissors") {
    // case: paper vs scissors
    return 2;
  } else if (playerChoice === "scissors" && computerSelection === "scissors") {
    // case: scissors vs scissors
    return 0;
  } else if (playerChoice === "scissors" && computerSelection === "rock") {
    // case: scissors vs rock
    return 2;
  } else {
    // case: scissors vs paper
    return 1;
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Pick one: Rock, Paper or Scissor?");
    let computerInput = getComputerChoice();
    console.log("You: " + userInput.toLowerCase());
    console.log("Computer: " + computerInput);
    console.log(playRound(userInput, computerInput));
    
    if (points(userInput, computerInput) === 1) {
      userScore++;
    } else if (points(userInput, computerInput) === 2) {
      computerScore++;
    }
    
    console.log("Your Score:", userScore, "Computer's Score:", computerScore);
  }

  if (userScore > computerScore) {
    console.log("Congratulations, you've won!");
  } else if (userScore < computerScore) {
    console.log("Aww, you've lost.");
  } else if (userScore === computerScore) {
    console.lot("It's a tie!");
  }
}

// starting the game
game();