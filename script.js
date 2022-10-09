let PLAYER_SCORE = 4;
let COMPUTER_SCORE = 4;

//Player takes their pick
function DISPLAY(text) {
	document.querySelector('.dialouge__box p').innerHTML = text;
}

//Starts the game when player picks a choice and calls computers turn
const picks = document.querySelectorAll('.picks__choice');
picks.forEach((element) => {
	element.addEventListener('click', () => {
		let playerChoice = element.classList[1];
		DISPLAY(`You chose ${playerChoice}!`)
		setTimeout(() => {
			DISPLAY('Computer is choosing...')
		}, 1000);
		computerPlay(playerChoice);
	});
});

//Computer randomly picks then calls function to check who wins
function computerPlay(playerChoice) {
	const choice = ['rock', 'paper', 'scissors'];
	const computerChoice = choice[Math.floor(Math.random() * 3)];
	setTimeout(() => {
		DISPLAY(`Computer chose ${computerChoice}!`)
	}, 1866);
	checkWinner(playerChoice, computerChoice)
}

//Checks winner then calls a function to update the score
function checkWinner(playerChoice, computerChoice) {
	setTimeout(() => {
		if (playerChoice === computerChoice) {
			DISPLAY(`It's a tie!`);
		} else if (playerChoice === 'rock' && computerChoice === 'scissors'
			|| playerChoice === 'scissors' && computerChoice === 'paper'
			|| playerChoice === 'paper' && computerChoice === 'rock') {
			DISPLAY('You Win!');
			scorePlayer();

		} else {
			DISPLAY('Computer Wins!');
			scoreComputer();
		}

	}, 2780);
}

//Updates score and if score is 5, pop up appears to reset game
function updateScore(person, score) {
	document.querySelector(`.${person} p`).innerHTML = score;
}
function scorePlayer() {
	++PLAYER_SCORE;
	updateScore('score__player', PLAYER_SCORE);
	if (PLAYER_SCORE === 5) {
		RESET_CONTAINER_ADD('You Win!');
	}
}

function scoreComputer() {
	++COMPUTER_SCORE;
	updateScore('score__computer', COMPUTER_SCORE);
	if (COMPUTER_SCORE === 5) {
		RESET_CONTAINER_ADD('Computer Wins!');
	}

}


//Makes pop up appear by adding fade-in class and removing the start class
function RESET_CONTAINER_ADD(result) {
	document.querySelector('.reset').classList.add(`reset__fade-in`);
	document.querySelector('.reset').classList.remove('start');
	document.querySelector('.reset__content h2').innerHTML = result;
}

// Reset all info and removes reset banner
function reset() {
	const resetContainer = document.querySelector('.reset');
	PLAYER_SCORE = 0;
	COMPUTER_SCORE = 0;
	updateScore('score__player', 0);
	updateScore('score__computer', 0);
	resetContainer.classList.remove('reset__fade-in');
	resetContainer.classList.add('reset__fade-out');
}

const resetYes = document.querySelector('.reset__choice-yes');
resetYes.addEventListener('click', reset);
