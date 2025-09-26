// UI state variables (no game logic)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// UI update functions
function updatePlayerChoice(choice) {
    const playerChoiceEl = document.getElementById('playerChoice');
    const choiceMap = {
        'rock': '✊',
        'paper': '✋',
        'scissors': '✌️'
    };
    playerChoiceEl.textContent = choiceMap[choice] || '?';
    playerChoiceEl.classList.add('active');
}

function updateComputerChoice(choice) {
    const computerChoiceEl = document.getElementById('computerChoice');
    const choiceMap = {
        'rock': '✊',
        'paper': '✋',
        'scissors': '✌️'
    };
    computerChoiceEl.textContent = choiceMap[choice] || '?';
    computerChoiceEl.classList.add('active');
}

function updateGameStatus(status) {
    document.getElementById('gameStatus').textContent = status;
}

function updateScores(player, computer, ties) {    
    document.getElementById('playerScore').textContent = player;
    document.getElementById('computerScore').textContent = computer;
    document.getElementById('tieScore').textContent = ties;
    playerScore = player;
    computerScore = computer;
    tieScore = ties;
}

function clearChoices() {
    document.getElementById('playerChoice').textContent = '?';
    document.getElementById('computerChoice').textContent = '?';
    document.getElementById('playerChoice').classList.remove('active');
    document.getElementById('computerChoice').classList.remove('active');
}

function resetScores() {
    updateScores(0, 0, 0);
    clearChoices();
    updateGameStatus('Scores reset. Make a gesture to start playing.');
}

// Expose functions for backend integration
window.gameUI = {
    updatePlayerChoice,
    updateComputerChoice,
    updateGameStatus,
    updateScores,
    clearChoices
};