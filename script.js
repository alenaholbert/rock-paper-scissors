const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

const body = document.querySelector("#body");
const log = document.createElement("div");
const scoreKeeper = document.createElement("div");
scoreKeeper.style.marginBottom = "30px";
scoreKeeper.style.borderStyle = "solid";
const computerPlay = document.createElement("div");
computerPlay.style.marginBottom = "30px";
computerPlay.style.color = "blue";
body.appendChild(scoreKeeper);
body.appendChild(computerPlay);
body.appendChild(log);

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
        finalResult = "You won! -- You: " + playerWins + " to Computer: " + computerWins;
    }
    else {
        finalResult = "You lose :( -- You: " + playerWins + " to Computer: " + computerWins;
    }
    updateLog(finalResult);
}

function playAgain() {
    if (confirm(result + ". Would you like to play again?")) {
        playerWins = 0;
        computerWins = 0;
        rock.addEventListener('click', game);
        paper.addEventListener('click', game);
        scissors.addEventListener('click', game);

        while (log.lastElementChild) {
            log.removeChild(log.lastElementChild);
        }
        updateScore();
        computerPlay.textContent = "";
    }
}

function updateScore() {
    scoreKeeper.textContent = "You: " + playerWins + " vs Computer: " + computerWins;
}

function updateLog(result) {
    const previousRounds = document.querySelectorAll("#prevRound");
    previousRounds.forEach(round => round.style.color = 'lightgray');

    const round = document.createElement('div');
    round.id = "prevRound";
    round.textContent = result;
    log.prepend(round);
}

function game() {
    playerSelection = this.dataset.button;
    computerSelection = choices[Math.floor(Math.random() * 3)];
    result = playRound(playerSelection, computerSelection);
    computerPlay.textContent = "Computer played: " + computerSelection;

    updateScore();

    updateLog(result);
    
    if (playerWins == 5 || computerWins == 5) {
        endGame();
        playAgain();
    }
}