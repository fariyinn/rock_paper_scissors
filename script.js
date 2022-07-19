let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
        playSingleRound(button.id, generateComputerSelection());
    });
});

const containerScores = document.querySelector('.containerScores');
const containerResults = document.querySelector('.containerResults');
const containerGameOver = document.querySelector('.containerGameOver');
const containerPlayAgain = document.querySelector('.containerPlayAgain');

const playerScoreTracker = document.createElement('div');
playerScoreTracker.classList.add('playerScoreTracker');
playerScoreTracker.textContent = 'Your score: ' + playerScore;
containerScores.appendChild(playerScoreTracker);

const computerScoreTracker = document.createElement('div');
computerScoreTracker.classList.add('computerScoreTracker');
computerScoreTracker.textContent = 'Computer score: ' + computerScore;
containerScores.appendChild(computerScoreTracker);

const result = document.createElement('div');
result.classList.add('result');
containerResults.appendChild(result);

const gameOver = document.createElement('div');
gameOver.classList.add('gameOver');
containerGameOver.appendChild(gameOver);

function generateComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    return computerSelection = options[randomNumber];
};

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats Rock!';
        computerScore++;

        removeStyle();
        setComputerScoreStyle();
        displayUpdatedScore();
        checkGameOver();
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors!';
        playerScore++;

        removeStyle();
        setPlayerScoreStyle();
        displayUpdatedScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock!';
        playerScore++;

        removeStyle();
        setPlayerScoreStyle();
        displayUpdatedScore();
        checkGameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissors beats Paper!';
        computerScore++;

        removeStyle();
        setComputerScoreStyle();
        displayUpdatedScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors!';
        computerScore++;

        removeStyle();
        setComputerScoreStyle();
        displayUpdatedScore();
        checkGameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissors beats Paper!';
        playerScore++;

        removeStyle();
        setPlayerScoreStyle();
        displayUpdatedScore();
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

function setComputerScoreStyle() {
    computerScoreTracker.style.backgroundColor = '#88AADD'
    computerScoreTracker.style.borderRadius = '20px';
};

function setPlayerScoreStyle() {
    playerScoreTracker.style.backgroundColor = '#88AADD';
    playerScoreTracker.style.borderRadius = '20px';
};

function displayUpdatedScore() {
    playerScoreTracker.textContent = 'Your score: ' + playerScore;
    computerScoreTracker.textContent = 'Computer score: ' + computerScore;
};

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        DisplayGameOverMessage();
        playAgain();
    } else {
        return;
    }
};

function displayGameOverMessage() {
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