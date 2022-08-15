const move = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // generates a number from the range of 0 through 2 (inclusive)
    let randomNumber = Math.floor(Math.random() * 3)
    return move[randomNumber];
}