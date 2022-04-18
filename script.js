var randomNumber = function() {
    var randomInteger = Math.floor(Math.random()*3);
    return randomInteger;
};

var computerPlay = function() {
    var computerPlay = randomNumber();
    if (computerPlay === 0) {
        return 'Scissors';
    } 
    if (computerPlay === 1) {
        return 'Stone';
    }
    if (computerPlay === 2) {
        return 'Paper';
    }
};

var playRound = function(playerSelection) {
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay().toLowerCase();
    var outputValue = `You chose ${playerSelection} and computer chose ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        return outputValue + " It's a draw!";
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'stone') {
            return outputValue + " You lost!";
        } else if (computerSelection === 'paper') {
            return outputValue + " You won!";
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return outputValue + " You lost!";
        } else if (computerSelection === 'stone') {
            return outputValue + " You won!";
        }
    }
    if (playerSelection === 'stone') {
        if (computerSelection === 'paper') {
            return outputValue + " You lost!";
        } else if (computerSelection === 'scissors') {
            return outputValue + " You won!";
        }
    }
};


