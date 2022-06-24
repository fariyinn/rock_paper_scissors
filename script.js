function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomNumber];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    let lowercasePlayerSelection = playerSelection.toLowerCase();

    if (lowercasePlayerSelection == 'rock' && computerSelection == 'paper') {
        return ('You lose! Paper beats Rock!');
    } else if (lowercasePlayerSelection == 'rock' && computerSelection == 'scissors') {
        return ('You win! Rock beats Scissors!');
    } else if (lowercasePlayerSelection == 'paper' && computerSelection == 'rock') {
        return ('You win! Paper beats Rock!');
    } else if (lowercasePlayerSelection == 'paper' && computerSelection == 'scissors') {
        return ('You lose! Scissors beats Paper!');
    } else if (lowercasePlayerSelection == 'scissors' && computerSelection == 'rock') {
        return ('You lose! Rock beats Scissors!');
    } else if (lowercasePlayerSelection == 'scissors' && computerSelection == 'paper') {
        return ('You win! Scissors beats Paper!');
    } else if ((lowercasePlayerSelection == 'rock' && computerSelection == 'rock') || (lowercasePlayerSelection == 'paper' && computerSelection == 'paper') || (lowercasePlayerSelection == 'scissors' && computerSelection == 'scissors')) {
        return ('It\'s a tie! Play again!');
    } else {
        return('That is not one of the 3 options!');
    }
}

const playerSelection = "PaPer";

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));