function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;

    if(random === 1) return "rock";
    else if(random === 2) return "paper";
    else return "scissors";
}

const container = document.querySelector('.main-content');

container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && HumanScore < 5 && ComputerScore < 5) {
        const humanChoice = e.target.dataset.choice;
        PlayGame(humanChoice);
    }
});

let ComputerScore = 0;
let HumanScore = 0;


const resultDisplay = document.createElement('p');
resultDisplay.style.display = 'flex';
resultDisplay.style.justifyContent = 'center';
resultDisplay.style.alignItems = 'center';
document.querySelector('.box').appendChild(resultDisplay);

function PlayRound(humanChoice, CompChoice){
    let msg = "";

    if (humanChoice === CompChoice) {
        msg = `Draw! Both chose ${humanChoice}.`;
    } 
    else if (
        (humanChoice === "rock" && CompChoice === "scissors") ||
        (humanChoice === "paper" && CompChoice === "rock") ||
        (humanChoice === "scissors" && CompChoice === "paper")
    ) {
        HumanScore++;
        msg = `You WIN! ${humanChoice.toUpperCase()} beats ${CompChoice}.`;
        document.querySelector('.humantext').textContent = `Human Score : ${HumanScore}`;
    } 
    else {
        ComputerScore++;
        msg = `You LOSE! ${CompChoice.toUpperCase()} beats ${humanChoice}.`;
        document.querySelector('.computertext').textContent = `Computer Score : ${ComputerScore}`;
    }

    resultDisplay.textContent = msg;
}

function declareWinner(winner){
    let p = document.createElement('h2'); 
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
    p.style.alignItems = 'center';
    
    if(winner === 'human') {
        p.textContent = "🏆 Human is the ultimate winner!";
        p.style.color = "green";
    } else if (winner === 'computer') {
        p.textContent = "💻 Computer is the ultimate winner!";
        p.style.color = "red";
    }
    
    document.querySelector('.box').appendChild(p); 
}

function PlayGame(humanchoice){
    const computerSelection = getComputerChoice();
    PlayRound(humanchoice, computerSelection);
    if (HumanScore === 5) {
        declareWinner('human');
    } else if (ComputerScore === 5) {
        declareWinner('computer');
    }
}