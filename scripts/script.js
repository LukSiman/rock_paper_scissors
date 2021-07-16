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

/*function validateInput(){
    while(true){
        let playerInput = prompt("Please input your play (Rock, paper or scissors)");
        playerInput = playerInput.toLowerCase();
       
        if(playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors"){
            alert("Invalid input, try again!");
        } else {
            return playerInput;
        }
    }
}*/

function game(button) {
    let score = 0;
    for (i = 1; i <= 5; ++i) {
        let computerSelection = computerPlay();
        let playerSelection = button.id;
        score += playRound(playerSelection, computerSelection);
    }
    if (score === 0) {
        console.log("Final result is a draw!");
    } else if (score < 0) {
        console.log("You lost, computer wins!");
    } else {
        console.log("You won, computer lost!");
    }

}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    const result = document.querySelector('#result');

    if (player === computer) {
        result.textContent = "Draw!";
    } else if (player === "rock" && computer === "paper") {
        result.textContent = "You Lose! Paper beats Rock!";
        computerScore++;

    } else if (player === "scissors" && computer === "rock") {
        result.textContent = "You Lose! Rock beats Scissors!";
        computerScore++;

    } else if (player === "paper" && computer === "scissors") {
        result.textContent = "You Lose! Scissors beats Paper!";
        computerScore++;

    } else {
        player = player.slice(0, 1).toUpperCase() + player.slice(1);
        computer = computer.slice(0, 1).toUpperCase() + computer.slice(1);
        result.textContent = `You Win! ${player} beats ${computer}!`;
        playerScore++;
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
            final_result.textContent = "BEEP BOOP, computer wins!";
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