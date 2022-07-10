let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    computerSelection = options[randomNumber];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        console.log('You lose! Paper beats Rock!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        console.log('You win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log('You win! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper!');
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        console.log('You win! Scissors beats Paper!');
    } else if (playerSelection == computerSelection) {
        console.log('It\'s a tie! Play again!');
    } else {
        console.log('That is not one of the 3 options!');
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});