const choice = ['rock', 'paper', 'scissors'];
let answer;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const containerPlayer = document.querySelector('.results__player-pick');
const containerComp = document.querySelector('.results__computer-pick');

const containerScorePlayer = document.querySelector('.results__score-player p');
const containerScoreComp = document.querySelector('.results__score-computer p');

const containerPicks = document.querySelector('.results__picks');

function playerChoice(pick) {
	playerSelection = pick;
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
	const playerDiv = document.createElement('div');
	const compDiv = document.createElement('div');
	const pickDiv = document.createElement('div');

	playerDiv.classList.add('results__player-pick');
	compDiv.classList.add('results__computer-pick');
	playerDiv.textContent = playerSelection;
	compDiv.textContent = computerSelection;
	let picksPlayer = containerPlayer.prepend(playerDiv);
	let picksComp = containerComp.prepend(compDiv);
	containerPicks.prepend(pickDiv);

	if (playerSelection == computerSelection) {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'It is a tie!!');
	} else if (playerSelection == 'rock' && computerSelection == 'paper') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! paper beats rock');
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! rock beats scissors');
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! Paper beats rock');
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! scissors beats paper');
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! rock beats scissors');
	} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! scissors beats paper');
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
		containerScorePlayer.innerHTML = playerScore;
	} else if (answer.includes('lose!')) {
		computerScore++;
		containerScoreComp.innerHTML = computerScore;
	} else {
		console.log(`Score
Player: ${playerScore} 
user:${computerScore}`);
	}

	//Print winner if user loses
	//otherwise print loser.
}
