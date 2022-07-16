// global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

// UI - buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
        playRound(button.id, computerPlay());
    });
});

// UI - containers
const containerScores = document.querySelector('.containerScores');
const containerResults = document.querySelector('.containerResults');
const containerGameOver = document.querySelector('.containerGameOver');
const containerPlayAgain = document.querySelector('.containerPlayAgain');

// UI - score trackers
const playerScoreTracker = document.createElement('div');
playerScoreTracker.classList.add('playerScoreTracker');
playerScoreTracker.textContent = 'Your score: ' + playerScore;
containerScores.appendChild(playerScoreTracker);

const computerScoreTracker = document.createElement('div');
computerScoreTracker.classList.add('computerScoreTracker');
computerScoreTracker.textContent = 'Computer score: ' + computerScore;
containerScores.appendChild(computerScoreTracker);

// UI - results
const result = document.createElement('div');
result.classList.add('result');
containerResults.appendChild(result);

// UI - game over
const gameOver = document.createElement('div');
gameOver.classList.add('gameOver');
containerGameOver.appendChild(gameOver);

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

        removeStyle();
        computerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors!';
        playerScore++;

        removeStyle();
        playerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock!';
        playerScore++;

        removeStyle();
        playerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissors beats Paper!';
        computerScore++;

        removeStyle();
        computerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors!';
        computerScore++;

        removeStyle();
        computerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissors beats Paper!';
        playerScore++;

        removeStyle();
        playerScoreStyle();
        updateScore();
        checkGameOver();
    } else if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie! Play again!';

        removeStyle();
    }
};

function removeStyle() {
    computerScoreTracker.removeAttribute('style');
    playerScoreTracker.removeAttribute('style');
};

function computerScoreStyle() {
    computerScoreTracker.style.backgroundColor = '#88AADD';
    computerScoreTracker.style.padding = '10px';
    computerScoreTracker.style.borderRadius = '20px';
};

function playerScoreStyle() {
    playerScoreTracker.style.backgroundColor = '#88AADD';
    playerScoreTracker.style.padding = '10px';
    playerScoreTracker.style.borderRadius = '20px';
};

function updateScore() {
    playerScoreTracker.textContent = 'Your score: ' + playerScore;
    computerScoreTracker.textContent = 'Computer score: ' + computerScore;
};

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOverMessage();
        playAgain();
    } else {
        return;
    }
};

function gameOverMessage() {
    return playerScore > computerScore ? (gameOver.textContent = 'Game over! You won!') 
    : (gameOver.textContent = 'Game over! Computer won!');
};

function playAgain() {
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton');
    playAgainButton.textContent = 'Play Again?';
    containerPlayAgain.appendChild(playAgainButton);

    buttons.forEach((button) => {
        button.style.opacity = '0';
        });

	playAgainButton.addEventListener('click', () => {
		window.location.reload();
	});
};