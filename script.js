let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const wildMode = document.querySelector('#wildMode');

wildMode.addEventListener('click', () => {
    document.body.classList.toggle('wildMode');
});

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
    const options = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    return computerSelection = options[randomNumber];
};

function playSingleRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            result.textContent = 'It\'s a tie! Play again!';
            removeStyle();
            break;

        case (playerSelection === 'Rock' && computerSelection === 'Paper'):
        case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
        case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
            result.textContent = `You lose! ${playerSelection} beats ${computerSelection}!`;
            computerScore++;
    
            removeStyle();
            setComputerScoreStyle();
            displayUpdatedScore();
            checkGameOver();
            break;
        
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;

            removeStyle();
            setPlayerScoreStyle();
            displayUpdatedScore();
            checkGameOver();
            break;
    };
};

function removeStyle() {
    computerScoreTracker.removeAttribute('style');
    playerScoreTracker.removeAttribute('style');
};

function setComputerScoreStyle() {
    computerScoreTracker.style.backgroundColor = '#FFB700';
    computerScoreTracker.style.borderRadius = '20px';
};

function setPlayerScoreStyle() {
    playerScoreTracker.style.backgroundColor = '#FFB700';
    playerScoreTracker.style.borderRadius = '20px';
};

function displayUpdatedScore() {
    playerScoreTracker.textContent = 'Your score: ' + playerScore;
    computerScoreTracker.textContent = 'Computer score: ' + computerScore;
};

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        displayGameOverMessage();
        createPlayAgainButton();
    } else {
        return;
    }
};

function displayGameOverMessage() {
    return playerScore > computerScore ? (gameOver.textContent = 'Game over! You won!') 
    : (gameOver.textContent = 'Game over! Computer won!');
};

function createPlayAgainButton() {
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