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

function validateInput(){
    while(true){
        let playerInput = prompt("Please input your play (Rock, paper or scissors)");
        playerInput = playerInput.toLowerCase();
       
        if(playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors"){
            alert("Invalid input, try again!");
        } else {
            return playerInput;
        }
    }
}

function game(){
    let score = 0;
   // for(i = 1; i <= 5; ++i){
        let computerSelection = computerPlay();
        let playerSelection = validateInput();
        score += playRound(playerSelection, computerSelection);
   // }
    if(score === 0){
        console.log("Final result is a draw!");
    } else if(score < 0){
        console.log("You lost, computer wins!");
    } else {
        console.log("You won, computer lost!");
    }

}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player === computer){
        console.log("Draw!");
        return 0;
    } else if(player === "rock" && computer === "paper"){
        console.log("You Lose! Paper beats Rock.");
        return -1;

    } else if(player === "scissors" && computer === "rock"){
        console.log("You Lose! Rock beats Scissors.");
        return -1;

    } else if(player === "paper" && computer === "scissors"){
        console.log("You Lose! Scissors beats Paper.");
        return -1; 

    } else {
        player = player.slice(0,1).toUpperCase() + player.slice(1);
        computer = computer.slice(0,1).toUpperCase() + computer.slice(1);
        console.log(`You Win! ${player} beats ${computer}.`);
        return 1;
    }
}