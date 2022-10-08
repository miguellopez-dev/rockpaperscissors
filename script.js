let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

const resetYes = document.querySelector('.reset__choice-yes');
const resetContainer = document.querySelector('.reset');
const resetResult = document.querySelector('.reset__content h2');

//Player takes their pick
function display(text){ 
	document.querySelector('.dialouge__box p').innerHTML = text;
}

const picks = document.querySelectorAll('.picks__choice');
picks.forEach((element) => {
	element.addEventListener('click', () => {
		let playerChoice = element.classList[1]; 
		display(`You chose ${playerChoice}!`)
		setTimeout(() => {
			display('Computer is choosing...')
		}, 1000);
		computerPlay(playerChoice);
	});
});

function computerPlay(playerChoice) {
	const choice = ['rock', 'paper', 'scissors'];
	const computerChoice = choice[Math.floor(Math.random() * 3)];
	setTimeout(() => {
		display(`Computer chose ${computerChoice}!`)
	}, 1866);
	playRound(playerChoice, computerChoice)
}

function playRound(playerChoice, computerChoice){
	setTimeout(() => {
		if (playerChoice === computerChoice){
			display(`It's a tie!`);
		}else if(playerChoice === 'rock' && computerChoice === 'scissors'
			|| playerChoice === 'scissors' && computerChoice === 'paper'
			|| playerChoice === 'paper' && computerChoice === 'rock'){
				display('You Win!');
				scorePlayer();
				
		} else {
			display('Computer Wins!');
			scoreComputer();
		}
	}, 2780);
	
	if(PLAYER_SCORE === 5 || COMPUTER_SCORE === 5){
		reset();
	}
}
function updateScore(person, score){
	document.querySelector(`.${person} p`).innerHTML = score;
}
function scorePlayer(){
	++PLAYER_SCORE;
	updateScore('score__player', PLAYER_SCORE);
}

function scoreComputer(){
	++COMPUTER_SCORE;
	updateScore('score__computer', COMPUTER_SCORE);
}

function game() {
	// The computer will randomly select one of the choices.
	
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
	resetContainer.classList.remove('reset__fade-in');
	resetContainer.classList.add('reset__fade-out');
}

resetYes.addEventListener('click', reset);
