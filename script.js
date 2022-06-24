function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomNumber];
    return computerSelection;
}