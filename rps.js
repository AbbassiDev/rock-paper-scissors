function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("What will you choose? Rock, Paper, or Scissors?");
    const choice = input.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice, defaulting to 'rock'");
        return "rock";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log(`It's a draw! Both chose ${human}.`);
        return;
    }

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    console.log("--- Game Over ---");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
