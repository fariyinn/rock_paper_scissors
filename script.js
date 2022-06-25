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

function game() {
    for (let currentGame = 1; currentGame <= 5; currentGame++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log('Your Score: ' + playerScore);
        console.log('Computer\'s Score: ' + computerScore);
    }

    if (currentGame = 5) {
        if (playerScore > computerScore) {
            console.log('Winner! You got the most points out of 5 games!');
        } else {
        console.log('Aww! You got the least points out of 5 games');
        }
    }
}

game();