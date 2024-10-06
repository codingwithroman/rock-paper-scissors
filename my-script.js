const gameOptions = [
    {value: "rock", image: "rock-image.png"},
    {value: "paper", image: "paper-image.png"},
    {value: "scissors", image: "scissors-image.png"} 
];

const outcomeMessage = document.getElementById("roundOutcome");

function getComputerChoice() {

    const computerChoiceImage = document.getElementById("randomImage");

    const randomOptionIndex = Math.floor(Math.random() * gameOptions.length);
    
    const randomOption = gameOptions[randomOptionIndex];

    computerChoiceImage.src = randomOption.image;

    return randomOption.value;

}

let humanScore = 0;
let computerScore = 0;

// console.log(`you: ${humanScore}, computer: ${computerScore}`)

function determineWinner(humanChoice, computerChoice){
    let resultMessage;


    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
     ) {
        humanScore++;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    }  

    if (computerScore === 5 || humanScore === 5) {
        outcomeMessage.textContent = "GAME OVER";
        computerScore = 0;
        humanScore = 0;
    } else {
        outcomeMessage.textContent = resultMessage;
    }

}

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

        const computerChoice = getComputerChoice();

        const humanChoice = event.currentTarget.id;

        determineWinner(humanChoice, computerChoice);

        const score = document.getElementById("score");

        score.textContent = `Computer: ${computerScore} You: ${humanScore}`;

  
        
    });
});



