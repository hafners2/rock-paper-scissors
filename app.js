let cpuChoiceDisplay = document.getElementById("cpu-choice");
let userChoiceDisplay = document.getElementById("user-choice");
let result = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let cpuChoice;
let randNum;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult();
}))

function getComputerChoice () {
    randNum = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randNum);

    if(randNum === 1) {
        cpuChoice = 'rock';
    }
    if(randNum === 2) {
        cpuChoice = 'paper';
    }
    if(randNum === 3) {
        cpuChoice = 'scissors';
    }
    cpuChoiceDisplay.innerHTML = cpuChoice;
}

function getResult() {
    if (cpuChoice === userChoice) {
        result.innerHTML = "It's a Draw!";
    }
    if (cpuChoice === 'rock' && userChoice === 'paper' || cpuChoice === 'paper' 
    && userChoice === 'scissors' || cpuChoice === 'scissors' && userChoice === 'rock') {
        result.innerHTML = "You Won!";
    }
    if (cpuChoice === 'rock' && userChoice === 'scissors' || cpuChoice === 'paper' 
    && userChoice === 'rock' || cpuChoice === 'scissors' && userChoice === 'paper') {
        result.innerHTML = "Wrong Move!";
    }
}