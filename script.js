const choice = ['rock', 'paper', 'scissors'];
let answer;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function playerChoice(rice) {
	playerSelection = rice;
	if (
		playerSelection == 'rock' ||
		playerSelection == 'paper' ||
		playerSelection == 'scissors'
	) {
		game();
		return playerSelection;
	} else {
		alert(`${playerSelection} is not a valid entry. Please try again.`);
		playerChoice();
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
		return (answer = 'You lose! paper beats rock');
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		picks;
		return (answer = 'You win! rock beats scissors');
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		picks;
		return (answer = 'You win! Paper beats rock');
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		picks;
		return (answer = 'You lose! scissors beats paper');
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		picks;
		return (answer = 'You lose! rock beats scissors');
	} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		picks;
		return (answer = 'You win! scissors beats paper');
	} else {
		return (answer = `You entered ${playerSelection}, that is not a valid entry.`);
	}
}

function game() {
	// The computer will randomly select one of the choices.
	function computerPlay() {
		return choice[Math.floor(Math.random() * 3)];
	}
	const computerSelection = computerPlay();

	playRound(playerSelection, computerSelection);

	if (answer.includes('win!')) {
		playerScore++;
		console.log(`Score
Player: ${playerScore} 
user:${computerScore}`);
	} else if (answer.includes('lose!')) {
		console.log(answer.includes('win!'));
		computerScore++;
		console.log(`Score 
Player:${playerScore}
user:${computerScore}`);
	} else {
		console.log(`Score
Player: ${playerScore} 
user:${computerScore}`);
	}

	//Print winner if user loses
	//otherwise print loser.
	console.log(answer);
}
