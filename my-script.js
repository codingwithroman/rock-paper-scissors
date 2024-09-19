const gameOptions = [
    "rock", 
    "paper", 
    "scissors"
];

function getComputerChoice() {

    const randomOptionIndex = Math.floor(Math.random() * gameOptions.length);
    
    return gameOptions[randomOptionIndex];

}


function getHumanChoice() {
  
    const choice = prompt("Choose rock, paper or scissors:").toLowerCase();

    if (gameOptions.includes(choice)) {
        return choice;
    } else {
        alert("Invalid. Please refresh the page and try again.");
        return null;
    }
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    if (!humanChoice) {
        return "No game due too invalid answer";
    }

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
     ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }  
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
    
        console.log(`Your choice: ${humanSelection}
Computer choice: ${computerSelection}`);
        console.log(result);
    
        await delay(2000);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you took the W!");
    } else if (computerScore > humanScore) {
        console.log("You're a big smelly loser");
    } else {
        console.log("It's a tie!");
    }

    console.log(`Your score: ${humanScore}
    Computer score: ${computerScore}`);

}

playGame();