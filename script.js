// global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

// UI - buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

// UI - container
const container = document.querySelector('.container');

// UI - score tracker
const playerScoreTracker = document.createElement('div');
playerScoreTracker.classList.add('playerScoreTracker');
playerScoreTracker.textContent = 'Your score: ' + playerScore;
container.appendChild(playerScoreTracker);

const computerScoreTracker = document.createElement('div');
computerScoreTracker.classList.add('computerScoreTracker');
computerScoreTracker.textContent = 'Computer score: ' + computerScore;
container.appendChild(computerScoreTracker);

// UI - results
const result = document.createElement('div');
result.classList.add('result');
container.appendChild(result);

// UI - game over
const gameOver = document.createElement('div');
gameOver.classList.add('gameOver');
container.appendChild(gameOver);

// functions
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    return computerSelection = options[randomNumber];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats Rock!';
        computerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors!';
        playerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock!';
        playerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissors beats Paper!';
        computerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors!';
        computerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissors beats Paper!';
        playerScore++;

        updateScore();
        checkGameOver();
    } else if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie! Play again!';
    }
};

function updateScore() {
    playerScoreTracker.textContent = 'Your score: ' + playerScore;
    computerScoreTracker.textContent = 'Computer score: ' + computerScore;
};

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOverMessage();
    } else {
        return;
    }
};

function gameOverMessage() {
    return (playerScoreTracker > computerScoreTracker) ? (gameOver.textContent = 'Game over! You won!') 
    : (gameOver.textContent = 'Game over! Computer won!');
};