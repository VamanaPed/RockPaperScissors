console.log("Hello World");

let lastChoice = "rock";

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

    switch (input)
    {
        case "Rock":
        case "rock":
        case "r":
                input = "rock";
            break;

        case "Paper":
        case "paper":
        case "p":
                input = "paper";
            break;

        case "Scissors":
        case "scissors":
        case "s":
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

getHumanChoice();

for (i = 0; i < 10; i++)
{
    console.log(getComputerChoice());
}