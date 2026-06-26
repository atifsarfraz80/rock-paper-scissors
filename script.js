function getComputerChoice(){
    let random = Math.floor(Math.random()*3) +1 ;

    if(random === 1) return "rock";
    else if(random === 2) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your Choice (Rock/Paper/Scissors)");
    if(choice != null)
    {
        choice = choice.toLowerCase();
        return choice;
    }
    else return;
}

let ComputerScore = 0;
let HumanScore = 0;

function PlayRound(humanChoice,CompChoice){
    if(humanChoice === "rock" && CompChoice === "paper") 
    {
        console.log("You LOSE! Paper beats Rock.");
        ComputerScore++;
    }

    else if(humanChoice === "rock" && CompChoice === "scissors") 
    {
        console.log("You WIN! Rock beats Scissors.");
        HumanScore++;
    }

    else if(humanChoice === "paper" && CompChoice === "rock") 
    {
        console.log("You WIN! Paper beats Rock.");
        HumanScore++;
    }
    else if(humanChoice === "paper" && CompChoice === "scissors") 
    {
        console.log("You LOSE! scissors beat paper.");
        ComputerScore++;
    }
    else if(humanChoice === "scissors" && CompChoice === "paper") 
    {
        console.log("You WIN! scissors beat paper.");
        HumanScore++;
    }
    else if(humanChoice === "scissors" && CompChoice === "rock") 
    {
        console.log("You lose! rock beats scissors.");
        ComputerScore++;
    }
    else if(humanChoice === CompChoice)
        console.log("Draw!");

}

function PlayGame(){
    for(let i = 1 ; i <= 5 ; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        PlayRound(humanSelection, computerSelection);
    }

    if(HumanScore > ComputerScore) console.log("Congratulations! YOU are the winner.");
    else if(HumanScore < ComputerScore) console.log("Alas! Computer is the winner.");
    else console.log("Its a DRAW!");
}

PlayGame();
