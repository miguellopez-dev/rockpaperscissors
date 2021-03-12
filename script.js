const choice = ['rock', 'paper', 'scissors'];
let answer;

// Check to see if users choice beats computers choice.
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		console.log(playerSelection, computerSelection);
		return (answer = 'It is a tie!!');
	} else if (playerSelection == 'rock' && computerSelection == 'paper') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You lose, paper beats rock');
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You win, rock beats scissors');
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You win, Paper beats rock');
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You lose, scissors beats paper');
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You lose, rock beats scissors');
	} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		console.log(playerSelection, computerSelection);
		return (answer = 'You win, scissors beats paper');
	} else {
		return (answer = `You entered ${playerSelection}, that is not a valid entry.`);
	}
}

function game() {
	for (i = 0; i < 5; i++) {
		// When a user inputs 'rock', 'paper' or 'scissors'.
		// Hold the choice in a variable.
		let playerSelection = prompt(
			'Rock, Paper or Scissors?',
			'Rock'
		).toLowerCase();

		// The computer will randomly select one of the choices.
		function computerPlay() {
			return choice[Math.floor(Math.random() * 3)];
		}
		const computerSelection = computerPlay();

		playRound(playerSelection, computerSelection);

		//Print winner if user loses
		//otherwise print loser.
		console.log(answer);
		console.log(' ');
	}
}

game();
