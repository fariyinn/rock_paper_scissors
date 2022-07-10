let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    computerSelection = options[randomNumber];
    return computerSelection;
};

function playRound(playerSelection, computerSelection) {
    const container = document.querySelector('.container');

    const result = document.createElement('div');
    result.classList.add('result');

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;

        result.textContent = 'You lose! Paper beats Rock!';
        container.appendChild(result);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;

        result.textContent = 'You win! Rock beats Scissors!';
        container.appendChild(result);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;

        result.textContent = 'You win! Paper beats Rock!';
        container.appendChild(result);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;

        result.textContent = 'You lose! Scissors beats Paper!';
        container.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;

        result.textContent = 'You lose! Rock beats Scissors!';
        container.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        
        result.textContent = 'You win! Scissors beats Paper!';
        container.appendChild(result);
    } else if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie! Play again!';
        container.appendChild(result);
    } else {
        result.textContent = 'That is not one of the 3 options!';
        container.appendChild(result);
    }
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});