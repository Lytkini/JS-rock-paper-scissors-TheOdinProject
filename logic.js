const controls = document.querySelector('#controls');
const roundResults = document.querySelector('#round');
const gameResults = document.querySelector('#game');

const rock = controls.querySelector('#rock');
const paper = controls.querySelector('#paper');
const scissors = controls.querySelector('#scissors');

let userScore = 0;
let compScore = 0;
let userInput = '';
let compInput = '';

rock.addEventListener('click', () => {
    userInput = 'rock';
    compInput = computerPlay();
    playRound (userInput, compInput);
    
});

paper.addEventListener('click', () => {
    userInput = 'paper';
    compInput = computerPlay();
    playRound (userInput, compInput);
    
});

scissors.addEventListener('click', () => {
    userInput = 'scissors';
    compInput = computerPlay();
    playRound (userInput, compInput);
    
});

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return 'rock'
    }
    if (randomNumber === 1) {
        return 'paper'
    }
    if (randomNumber === 2) {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    //Ensure that playerSelection parameter is a string
    let playerSelectionToString = String(playerSelection)

    //Make playerSelection case insensitive 
    playerSelectionToString = playerSelectionToString.toLowerCase()

    if (playerSelectionToString === computerSelection) {
        return roundResults.textContent = 'It`s a draw';
    }

    if (playerSelectionToString === 'rock' && computerSelection === 'scissors' || playerSelectionToString === 'paper' && computerSelection === 'rock' || playerSelectionToString === 'scissors' && computerSelection === 'paper') {
        userScore++
        if (userScore >= 5) {
            game();
        }
        return roundResults.textContent = 'User wins';
    } else {
        compScore++
        return roundResults.textContent = 'Computer wins';
    }

}

function game() {
    if (userScore == compScore) {
        return gameResults.textContent = 'It`s a tie' + ' ' + userScore + ' ' + compScore;
    }

    if (userScore > compScore) {
        return gameResults.textContent = 'Overall winner is user' + ' ' + userScore + ' ' + compScore;
    } else {
        return gameResults.textContent = 'Overall winner is computer' + ' ' + userScore + ' ' + compScore;
    }
}