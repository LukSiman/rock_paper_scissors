function computerPlay() {
    let result;
    
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";            
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    rock_button.removeAttribute('class');
    paper_button.removeAttribute('class');
    scissors_button.removeAttribute('class');

    const player_button = document.getElementById(player);
    const computer_button = document.getElementById(computer);

    const result = document.querySelector('#result');

    if (player === computer) {
        result.textContent = "Draw!";
        player_button.setAttribute('class', 'draw');
        computer_button.setAttribute('class', 'draw');
    } else if (player === "rock" && computer === "paper") {
        result.textContent = "You Lose! Paper beats Rock!";
        computerScore++;
        player_button.setAttribute('class', 'loser');
        computer_button.setAttribute('class', 'winner');

    } else if (player === "scissors" && computer === "rock") {
        result.textContent = "You Lose! Rock beats Scissors!";
        computerScore++;
        player_button.setAttribute('class', 'loser');
        computer_button.setAttribute('class', 'winner');

    } else if (player === "paper" && computer === "scissors") {
        result.textContent = "You Lose! Scissors beats Paper!";
        computerScore++;
        player_button.setAttribute('class', 'loser');
        computer_button.setAttribute('class', 'winner');

    } else {
        player = player.slice(0, 1).toUpperCase() + player.slice(1);
        computer = computer.slice(0, 1).toUpperCase() + computer.slice(1);
        result.textContent = `You Win! ${player} beats ${computer}!`;
        playerScore++;
        player_button.setAttribute('class', 'winner');
        computer_button.setAttribute('class', 'loser');
    }
}

let computerScore = 0;
let playerScore = 0;
let round_over = 0;

const buttons = document.querySelectorAll('button');

const game_score = document.querySelector('#score');
const final_result = document.createElement('p');


const player_score = document.querySelector('#player_score');
const player_result = document.createElement('p');

const computer_score = document.querySelector('#computer_score');
const computer_result = document.createElement('p');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());

        player_result.textContent = romanNumberConverter(playerScore);
        player_score.appendChild(player_result);

        computer_result.textContent = romanNumberConverter(computerScore);
        computer_score.appendChild(computer_result);

        if (round_over) {
            game_score.removeChild(final_result);
            round_over = 0;
        }

        if (computerScore === 5) {
            final_result.setAttribute('id', 'computer_wins');
            final_result.textContent = "BEEP BOOP, robot apocalypse!";
            game_score.appendChild(final_result);
            computerScore = 0;
            playerScore = 0;
            round_over = 1;
        } else if (playerScore === 5) {
            final_result.setAttribute('id', 'human_wins');
            final_result.textContent = "You won, humanity saved!";
            game_score.appendChild(final_result);
            computerScore = 0;
            playerScore = 0;
            round_over = 1;
        }
    });
});


function romanNumberConverter(arabicNumber) {
    let roman = "";
    const romanNumList = { V: 5, IV: 4, I: 1 };
    let a;

    for (let key in romanNumList) {
        a = Math.floor(arabicNumber / romanNumList[key]);
        if (a >= 0) {
            for (let i = 0; i < a; i++) {
                roman += key;
            }
        }
        arabicNumber = arabicNumber % romanNumList[key];
    }

    return roman;
}