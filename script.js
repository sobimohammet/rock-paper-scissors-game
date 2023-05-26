// get computer choice
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return (options[Math.floor(Math.random()*options.length)]).toLocaleLowerCase();
}

// get player choice
function getPlayerChoice() {
    let options = prompt(`Enter your selection`);
    return options.toLocaleLowerCase();
}

//setting player and computer selections to variables
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


// single round function
function playRound(playerSelection, computerSelection) {

    playerSelection;
    computerSelection;

    // Game outcome statements
    let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let drawGame = `It's a draw! Give it another shot`;
    if (playerSelection === computerSelection) {
        console.log(drawGame);
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(playerWin);
    } else if ((playerSelection === "scissors" && computerSelection === "rock") || 
               (playerSelection === "rock" && computerSelection === "paper") || 
               (playerSelection === "paper" && computerSelection === "scissors")) {
        console.log(computerWin);
    } 
}
playRound(playerSelection, computerSelection);