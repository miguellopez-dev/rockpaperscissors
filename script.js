const choice = ['rock', 'paper', 'scissors'];

function randomNumber() {
	return Math.floor(Math.random() * 3);
}
// When a user inputs 'rock', 'paper' or 'scissors'.
// Hold the choice in a variable.
let playerSelection = prompt('Rock, Paper or Scissors?', 'rock');
// The computer will randomly select one of the choices.
function computerPlay() {
	return choice[randomNumber()];
}

let computerSelection = computerPlay();

// Check to see if users choice beats computers choice.
function playRound(playerSelection, computerSelection) {
	switch (true) {
		case playerSelection == computerSelection:
			console.log(playerSelection, computerSelection);
			return console.log('It is a tie!!');

		case playerSelection == 'rock' && computerSelection == 'paper':
			console.log(playerSelection, computerSelection);
			console.log('You lose, paper beats rock');
			break;
		case playerSelection == 'rock' && computerSelection == 'scissors':
			console.log(playerSelection, computerSelection);
			console.log('You win, rock beats scissors');
			break;
		case playerSelection == 'paper' && computerSelection == 'rock':
			console.log(playerSelection, computerSelection);
			console.log('You win, Paper beats rock');
			break;
		case playerSelection == 'paper' && computerSelection == 'scissors':
			console.log(playerSelection, computerSelection);
			console.log('You lose, scissors beats paper');
			break;
		case playerSelection == 'scissors' && computerSelection == 'rock':
			console.log(playerSelection, computerSelection);
			console.log('You lose, rock beats scissors');
			break;
		case playerSelection == 'scissors' && computerSelection == 'paper':
			console.log(playerSelection, computerSelection);
			console.log('You win, scissors beats paper');
			break;
		default:
			console.log('nope');
	}
}

function game() {
	for (i = 0; i < 5; i++) {
		playRound(playerSelection, computerPlay());
	}
}
// Print winner if user loses
// otherwise print loser.
