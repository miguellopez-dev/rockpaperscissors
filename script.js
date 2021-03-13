const choice = ['rock', 'paper', 'scissors'];
let answer;
let playerSelection;

function player() {
	// When a user inputs 'rock', 'paper' or 'scissors'.
	// Hold the choice in a variable.
	playerSelection = prompt('Rock, Paper or Scissors?', 'Rock').toLowerCase();
	if (
		playerSelection == 'rock' ||
		playerSelection == 'paper' ||
		playerSelection == 'scissors'
	) {
		return playerSelection;
	} else {
		alert(`${playerSelection} is not a valid entry. Please try again.`);
		player();
	}
}

// Check to see if users choice beats computers choice.
function playRound(playerSelection, computerSelection) {
	let picks = console.log(
		`Player: ${playerSelection}
		 
Computer: ${computerSelection}`
	);
	if (playerSelection == computerSelection) {
		picks;
		return (answer = 'It is a tie!!');
	} else if (playerSelection == 'rock' && computerSelection == 'paper') {
		picks;
		return (answer = 'You lose, paper beats rock');
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		picks;
		return (answer = 'You win, rock beats scissors');
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		picks;
		return (answer = 'You win, Paper beats rock');
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		picks;
		return (answer = 'You lose, scissors beats paper');
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		picks;
		return (answer = 'You lose, rock beats scissors');
	} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		picks;
		return (answer = 'You win, scissors beats paper');
	} else {
		return (answer = `You entered ${playerSelection}, that is not a valid entry.`);
	}
}

function game() {
	for (i = 0; i < 5; i++) {
		player();
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
