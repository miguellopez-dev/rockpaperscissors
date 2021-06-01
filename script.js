const choice = ['rock', 'paper', 'scissors'];
let answer;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const containerPlayer = document.querySelector('.results__player-pick');
const containerComp = document.querySelector('.results__computer-pick');

const containerScorePlayer = document.querySelector('.score__player p');
const containerScoreComp = document.querySelector('.score__computer p');

const containerPicks = document.querySelector('.results__picks-outcome');

const resetYes = document.querySelector('.reset__choice-yes');
const resetContainer = document.querySelector('.reset');
const resetResult = document.querySelector('.reset__content h2');

//Player takes their pick
function playerChoice(pick) {
	playerSelection = pick;

	game();
	return playerSelection;
}

function playRound(player, computer) {
	// Adds classes and content to divs when a round is played
	const playerDiv = document.createElement('div');
	const compDiv = document.createElement('div');
	const pickDiv = document.createElement('div');

	playerDiv.classList.add('results__player-pick');
	compDiv.classList.add('results__computer-pick');
	playerDiv.textContent = player;
	compDiv.textContent = computer;
	let picksPlayer = containerPlayer.prepend(playerDiv);
	let picksComp = containerComp.prepend(compDiv);
	containerPicks.prepend(pickDiv);

	if (player == computer) {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'It is a tie!!');
	} else if (player == 'rock' && computer == 'paper') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! paper beats rock');
	} else if (player == 'rock' && computer == 'scissors') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! rock beats scissors');
	} else if (player == 'paper' && computer == 'rock') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! Paper beats rock');
	} else if (player == 'paper' && computer == 'scissors') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! scissors beats paper');
	} else if (player == 'scissors' && computer == 'rock') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You lose! rock beats scissors');
	} else if (player == 'scissors' && computer == 'paper') {
		picksPlayer;
		picksComp;
		return (answer = pickDiv.textContent = 'You win! scissors beats paper');
	} else {
		return (answer = `You entered ${player}, that is not a valid entry.`);
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
	}
	// if player reaches 5 points banner pops up and prevents clicking any where else
	if (playerScore >= 5) {
		resetContainer.classList.add('reset__fade-in');
		if (resetContainer.classList.contains('start')) {
			resetContainer.classList.remove('start');
		} else {
			resetContainer.classList.remove('reset__fade-out');
		}
		resetResult.textContent = 'You Win!';
		// if computer reaches 5 points banner pops up and prevents clicking any where else
	} else if (computerScore >= 5) {
		resetContainer.classList.add('reset__fade-in');
		if (resetContainer.classList.contains('start')) {
			resetContainer.classList.remove('start');
		} else {
			resetContainer.classList.remove('reset__fade-out');
		}

		resetResult.textContent = 'You Lose!';
	}
}

// Reset all info and removes reset banner
function reset() {
	playerScore = 0;
	computerScore = 0;
	containerScorePlayer.innerHTML = playerScore;
	containerScoreComp.innerHTML = computerScore;
	containerPicks.innerHTML = '';
	containerPlayer.innerHTML = '';
	containerComp.innerHTML = '';
	resetContainer.classList.remove('reset__fade-in');
	resetContainer.classList.add('reset__fade-out');
}

resetYes.addEventListener('click', reset);
