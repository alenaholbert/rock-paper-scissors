const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

const choices = ["rock", "paper", "scissors"];
playerWins = 0;
computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! You both played: " + playerSelection;
    }
    else if (playerSelection == "rock") {
        if(computerSelection == "paper"){
            computerWins++;
            return "You lose :( Paper beats rock.";
        }
        else if (computerSelection == "scissors"){
            this.playerWins++;
            return "You win! Rock beats scissors.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins++;
            return "You win! Paper beats rock.";
        }
        else if (computerSelection == "scissors") {
            computerWins++;
            return "You lose :( Scissors beats paper.";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins++;
            return "You lose :( Rock beats scissors.";
        }
        else if (computerSelection == "paper") {
            playerWins++;
            return "You win! Scissors beats paper.";
        }
    }
    return "Please enter a valid selection. " + playerSelection + " is not valid";
}

function endGame() {
    rock.removeEventListener('click', game);
    paper.removeEventListener('click', game);
    scissors.removeEventListener('click', game);

    if (playerWins == 5){
        return "You won! -- You: " + playerWins + " to Computer: " + computerWins;
    }
    return "You lose :( -- You: " + playerWins + " to Computer: " + computerWins;
}

function playAgain() {
    playerWins = 0;
    computerWins = 0;
    rock.addEventListener('click', game);
    paper.addEventListener('click', game);
    scissors.addEventListener('click', game);
}

function game() {
    console.log(playerWins);
    console.log(computerWins);
    if (playerWins == 5 || computerWins == 5) {
        alert(endGame());
        if (confirm("Would you like to play again?")) {
            playAgain();
        }
        return;
    }
    playerSelection = this.dataset.button;
    computerSelection = choices[Math.floor(Math.random() * 3)];
    result = playRound(playerSelection, computerSelection);
    console.log(result);
}