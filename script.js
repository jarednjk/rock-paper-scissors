const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        computerChoice = 'stone'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    } 
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice == playerChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'stone' && playerChoice === 'paper') {
        result = "You won!"
    }
    if (computerChoice === 'stone' && playerChoice === 'scissors') {
        result = "You lost!"
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = "You lost!"
    }
    if (computerChoice === 'scissors' && playerChoice === 'stone') {
        result = "You won!"
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = "You won!"
    }
    if (computerChoice === 'paper' && playerChoice === 'stone') {
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
}