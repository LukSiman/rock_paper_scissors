const playerSelection = "rock";
const computerSelection = computerPlay();

function computerPlay(){
    let result;
    let random = Math.floor(Math.random() * 3);
    switch(random){
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

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player === computer){
        return "Draw!";
    } else if(player === "rock" && computer === "paper"){
        return "You Lose! Paper beats Rock";

    } else if(player === "scissors" && computer === "rock"){
        return "You Lose! Rock beats Scissors";

    } else if(player === "paper" && computer === "scissors"){
        return "You Lose! Scissors beats Paper";
        
    } else {
        player = player.slice(0,1).toUpperCase() + player.slice(1);
        computer = computer.slice(0,1).toUpperCase() + computer.slice(1);
       
        return `You Win! ${player} beats ${computer}`;
    }
}

console.log(playRound(playerSelection, computerSelection));

//const playerSelection = prompt("Enter your play! Rock, paper or scissors.");
