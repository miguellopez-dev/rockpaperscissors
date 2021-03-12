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
	} else {
		return (answer = 'nothing');
	}
	// switch (true) {
	// 	case playerSelection == computerSelection:
	// 		console.log(playerSelection, computerSelection);
	// 		return 'It is a tie!!';

	// 	case playerSelection == 'rock' && computerSelection == 'paper':
	// 		console.log(playerSelection, computerSelection);

	// 		return 'You lose, paper beats rock';
	// 	case playerSelection == 'rock' && computerSelection == 'scissors':
	// 		console.log(playerSelection, computerSelection);

	// 		return 'You win, rock beats scissors';
	// 	case playerSelection == 'paper' && computerSelection == 'rock':
	// 		console.log(playerSelection, computerSelection);
	// 		return 'You win, Paper beats rock';
	// 	case playerSelection == 'paper' && computerSelection == 'scissors':
	// 		console.log(playerSelection, computerSelection);
	// 		return 'You lose, scissors beats paper';
	// 	case playerSelection == 'scissors' && computerSelection == 'rock':
	// 		console.log(playerSelection, computerSelection);
	// 		console.log('You lose, rock beats scissors');
	// 		break;
	// 	case playerSelection == 'scissors' && computerSelection == 'paper':
	// 		console.log(playerSelection, computerSelection);
	// 		console.log('You win, scissors beats paper');
	// 		break;
	// 	default:
	// 		console.log('nope');
	// }
}

function game() {
	for (i = 0; i < 5; i++) {
		// When a user inputs 'rock', 'paper' or 'scissors'.
		// Hold the choice in a variable.
		let playerSelection = prompt('Rock, Paper or Scissors?', 'rock');

		// The computer will randomly select one of the choices.

		function computerPlay() {
			return choice[Math.floor(Math.random() * 3)];
		}
		let computerSelection = computerPlay();

		playRound(playerSelection, computerSelection);

		//Print winner if user loses
		//otherwise print loser.
		console.log(answer);
	}
}

game();
