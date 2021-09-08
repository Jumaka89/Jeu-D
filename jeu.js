/*Initialisation des variables*/
var roundScore;
var activePlayer;
var globalScore;
var scoreGlobal1 = document.getElementById('score-global-player-1');
var scoreGlobal2 = document.getElementById('score-global-player-2');
var scoreRound1 =  document.getElementById('score-round-player-1');
var scoreRound2 =  document.getElementById('score-round-player-2');

function newGame(){
    alert('Fonctionne');
    globalScore =[0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameOn = true;

    document.querySelector('.dice').style.display = 'none';

    scoreGlobal1.textContent = '0';
    scoreGlobal2.textContent = '0';
    scoreRound1.textContent = '0';
    scoreRound2.textContent = '0';
    document.querySelector('#name--player-1').textContent = 'Player 1';
    document.querySelector('#name-player-2').textContent = 'Player 2';
}

document.querySelector('.btn-new-game').addEventListener('click', newGame)

