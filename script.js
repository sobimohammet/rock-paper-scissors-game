// get computer choice
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return (options[Math.floor(Math.random()*options.length)]).toLocaleLowerCase();
}

let playerScore = 0;
let computerScore = 0;

// single round function
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a draw! Give it another shot`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection === "scissors" && computerSelection === "rock") || 
               (playerSelection === "rock" && computerSelection === "paper") || 
               (playerSelection === "paper" && computerSelection === "scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } 
}



//looping playRound function for a 5 rounds game
function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt(`Enter your choice`).toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        
        function scoreTally() {
            if (playRound(playerSelection, computerSelection) === `You win! ${playerSelection} beats ${computerSelection}`) {
                playerScore = playerScore + 1;
                return `You: ${playerScore} computer: ${computerScore}`;
            } else if (playRound(playerSelection, computerSelection) === `You Lose! ${computerSelection} beats ${playerSelection}`) {
                computerScore = computerScore + 1;
                return `You: ${playerScore} computer: ${computerScore}`;
            } else {
                return `You: ${playerScore} Computer: ${computerScore}`;
            }
        }
        
        console.log(`${playRound(playerSelection, computerSelection)} score is ${scoreTally()}`);
        
    }
    scoreTally();
}


game();