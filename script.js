let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomNumber];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return ('You lose! Paper beats Rock!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return ('You win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return ('You win! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return ('You lose! Scissors beats Paper!');
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return ('You lose! Rock beats Scissors!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return ('You win! Scissors beats Paper!');
    } else if (playerSelection == computerSelection) {
        return ('It\'s a tie! Play again!');
    } else {
        return('That is not one of the 3 options!');
    }
}

game();