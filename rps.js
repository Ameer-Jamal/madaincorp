let playerScore = 0;
let computerScore = 0;
var options = ["rock", "paper", "scissors"];
let computerNumber;
let computerChoice;

window.onload = function () {
    var person = prompt("Please enter your name", "Name here");

    if (person != null) {
        document.getElementById("demo").innerHTML = person;
    }
};

function reseter() {
    location.reload();
}

function gameRock() {

    computerNumber = Math.floor(Math.random() * 3);
    computerChoice = options[computerNumber];
    console.log(computerChoice, computerNumber);

    if (computerChoice == "rock") {
        alert("its a draw :|");
    } else if (computerChoice == "paper") {
        alert("its a loss :(");
        computerScore++;
        document.getElementById("cs").innerHTML = computerScore;
    } else if (computerChoice == "scissors") {
        alert("its a win :)");
        playerScore++;
        document.getElementById("ps").innerHTML = playerScore;
    }


};

function gamePaper() {
    computerNumber = Math.floor(Math.random() * 3);
    computerChoice = options[computerNumber];
    console.log(computerChoice, computerNumber);

    if (computerChoice == "paper") {
        alert("its a draw :|");
    } else if (computerChoice == "scissors") {
        alert("its a loss :(");
        computerScore++;
        document.getElementById("cs").innerHTML = computerScore;
    } else if (computerChoice == "rock") {
        alert("its a win :)");
        playerScore++;
        document.getElementById("ps").innerHTML = playerScore;
    }

}


function gameScissors() {
    computerNumber = Math.floor(Math.random() * 3);
    computerChoice = options[computerNumber];
    console.log(computerChoice, computerNumber);

    if (computerChoice == "scissors") {
        alert("its a draw :|");
    } else if (computerChoice == "rock") {
        alert("its a loss :(");
        computerScore++;
        document.getElementById("cs").innerHTML = computerScore;
    } else if (computerChoice == "paper") {
        alert("its a win :)");
        playerScore++;
        document.getElementById("ps").innerHTML = playerScore;
    }

}