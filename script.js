console.log("Hello World");

let lastChoice = "rock";

let playerScore = 0;
let computerScore = 0;

let PlayerChoice = "";
let ComputerChoice = "";

function getComputerChoice()
{
    let choice = "";
    let rand = Math.random();

    let useLast = Math.random() > 0.5;
    
    if(useLast)
    {
        lastChoice = "";
    }
    
    switch (lastChoice) {
        case "rock":
            choice = rand > 0.5 ? "paper" : "scissors";
            break;
    
        case "paper":
            choice = rand > 0.5 ? "rock" : "scissors";
            break;

        case "scissors":
            choice = rand > 0.5 ? "paper" : "rock";
            break;
        
        case "":
            choice = rand > 0.33 ? (rand > 0.66 ? "paper" : "scissors") : "rock";
            break;
    }

    lastChoice = choice;

    return choice;
}

function getHumanChoice(text)
{
    if(!text) text = "Enter your move:";

    let input = prompt(text);
    console.log("Player entered: " + input);

    input = input.toUpperCase();

    switch (input)
    {
        case "ROCK":
        case "R":
                input = "rock";
            break;

        case "PAPER":
        case "P":
                input = "paper";
            break;

        case "SCISSORS":
        case "S":
                input = "scissors";
            break;

        default:
            input = "";
            break;
    }

    if(input === "")
    {
        return getHumanChoice("Please Enter: Rock, Paper Or Scissors");
    }

    return input;
}

let selectFX = new Audio('Audio/select.wav');
let select2FX = new Audio('Audio/select2.wav');
let winFX = new Audio('Audio/win.wav');
let loseFX = new Audio('Audio/lose.wav');
let restartFX = new Audio('Audio/restart.wav');

function getPlayerChoiceUI(input)
{
    selectFX.play();

    input = input.toUpperCase();

    switch (input)
    {
        case "ROCK":
        case "R":
                input = "rock";
            break;

        case "PAPER":
        case "P":
                input = "paper";
            break;

        case "SCISSORS":
        case "S":
                input = "scissors";
            break;

        default:
            input = "";
            break;
    }

    console.log("player choice " + input);
    playRoundUI(input, getComputerChoice());
}

const resultText = document.querySelector("#resultText");
resultText.textContent = "Pick your choice!";

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

const restartButton = document.getElementById("restart");
restartButton.style.display = "none";
restartButton.addEventListener("click", () => 
{
    restartFX.play();

    updateScores();

    resultText.textContent = "Pick your choice!";

    restartButton.style.display = "none";
});

function playRoundUI(playerChoice, computerChoice)
{
    const message = playRound(playerChoice, computerChoice);

    updateScores();

    resultText.textContent = message;

    if(playerScore != 0 || computerScore != 0)
    {
        restartButton.style.display = "none";
    }
    if(playerScore >= 5 || computerScore >= 5)
    {
        restartButton.style.display = "block";
    }

    if(playerScore >= 5)
    {
        winFX.play();

        resultText.textContent = `Player Wins! Your Score: ${playerScore}`;

        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore >= 5)
    {
        loseFX.play();

        resultText.textContent = "Computer Wins! You Lose!";
        
        playerScore = 0;
        computerScore = 0;
    }
}

function updateScores()
{
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`; 
}

function playRound(humanChoice, computerChoice)
{
    let winner = "tie";
    let message = "Tie! Try again";

    console.log("Player: " + humanChoice + " Computer: " + computerChoice);

    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            message = "Tie! Rock and Rock!";
        }
        else if(computerChoice === "paper")
        {
            winner = "computer";
            message = "You Lose! Paper beats Rock!";
        }
        else if(computerChoice = "scissors")
        {
            winner = "player";
            message = "You Win! Rock beats scissors!";
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            winner = "player";
            message = "You Win! Paper beats Rock!";
        }
        else if(computerChoice === "paper")
        {
            message = "Tie! Paper and Paper!";
        }
        else if(computerChoice = "scissors")
        {
            winner = "computer";
            message = "You Lose! Scissors beats Paper!";
        }
    }
    else if(humanChoice = "scissors")
    {
        if(computerChoice === "rock")
        {
            winner = "computer";
            message = "You Loose! Rock beats Scissors!";
        }
        else if(computerChoice === "paper")
        {
            winner = "player";
            message = "You Win! Scissors beats Paper!";
        }
        else if(computerChoice = "scissors")
        {
            message = "Tie! Scissors and Scissors!";
        }
    }

    switch(winner)
    {
        case "player":
                playerScore ++;
                select2FX.play();
            break;
        case "computer":
                computerScore ++;
            break;
    }

    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    return message;
}

function playGame()
{
    for (i = 0; i < 5; i++)
    {
        alert(playRound(getHumanChoice(), getComputerChoice()));
    }

    if(playerScore > computerScore)
    {
        console.log("Player Wins: " + playerScore + " > " + computerScore);
        alert("You Win! Your score: " + playerScore + " Computer score: " + computerScore);
    }
    else if (computerScore > playerScore)
    {
        console.log("Computer Wins: " + computerScore + " > " + playerScore);
        alert("You Loose! Computer score: " + computerScore + " Your score: " + playerScore);
    }
    else
    {
        console.log("Draw: Computer: " + computerScore + " Player: " + playerScore);
        alert("Draw! Your score: " + playerScore + " Computer score: " + computerScore);
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


//playGame();