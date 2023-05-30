let playerScore = 0;
let computerScore = 0;


// get computer choice
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return (options[Math.floor(Math.random()*options.length)]);
}


let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerHTML;
        getComputerChoice();
        let computerSelection = getComputerChoice();
        document.querySelector('.player-selection').textContent = playerSelection;
        document.querySelector('.computer-selection').textContent = computerSelection;
        if (playerSelection === computerSelection) {
            document.querySelector('div.statement').textContent = `Tie game!`;
        } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                   (playerSelection === "Scissors" && computerSelection === "Paper") ||
                   (playerSelection === "Paper" && computerSelection === "Rock")) {
            document.querySelector('div.statement').textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else if ((playerSelection === "Scissors" && computerSelection === "Rock") ||
                   (playerSelection === "Paper" && computerSelection === "Scissors") ||
                   (playerSelection === "Rock" && computerSelection === "Paper")) {
            document.querySelector('div.statement').textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }

        //handling score
        if (document.querySelector('div.statement').textContent === `Tie game!`) {
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
        } else if (document.querySelector('div.statement').textContent === `You win! ${playerSelection} beats ${computerSelection}`) {
            document.querySelector('#player-score').textContent = ++playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
        } else if (document.querySelector('div.statement').textContent === `You lose! ${computerSelection} beats ${playerSelection}`) {
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = ++computerScore;
        }

        //handling endgame
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                if (confirm(`You win! ${playerScore} : ${computerScore} click 'OK' to restart`)){
                    location.reload();
                }
            } else if (playerScore < computerScore) {
                if (confirm(`You lose! computer wins ${computerScore} : ${playerScore} click 'OK' to restart`)){
                    location.reload();
                }
            }
        }
    })
})