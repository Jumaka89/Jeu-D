/*Initialisation des variables*/
var roundScore;
var activePlayer;
var globalScore;
var gameOn;
var scoreGlobal1 = document.getElementById('score-global-player-0');
var scoreGlobal2 = document.getElementById('score-global-player-1');
var scoreRound1 =  document.getElementById('score-round-player-0');
var scoreRound2 =  document.getElementById('score-round-player-1');

/******************** 
Fonction Nouveau Jeu
*********************/
function newGame(){
    globalScore =[0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameOn = true;

    document.querySelector('.dice').style.display = 'none';

    scoreGlobal1.textContent = '0';
    scoreGlobal2.textContent = '0';
    scoreRound1.textContent = '0';
    scoreRound2.textContent = '0';
    document.getElementById('name-player-0').textContent = 'Player 1';
    document.getElementById('name-player-1').textContent = 'Player 2';
}

/****************************
Fonction Changement de joueur
*****************************/

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    //Remise à 0 score Round
    roundScore = 0;
    scoreRound1.textContent = '0';
    scoreRound2.textContent = '0';

    document.getElementById('player-0-box').classList.toggle('active');
    document.getElementById('player-1-box').classList.toggle('active');

    //Suppression de l'affichage du dé
    document.querySelector('.dice').style.display = 'none';
}

/******************** 
Fonction Lancer du dé
*********************/
function rollDice(){
    if(gameOn){
        //Résultat lancer du dé&aa
        var dice = Math.floor(Math.random() * 6) + 1;
        //Affichage du résultat
        var diceFace = document.querySelector('.dice');
        document.querySelector('.dice').style.display = 'block';
        diceFace.src = 'images/face-' + dice + '.png';
        //Ajout du score
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#score-round-player-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }     
}

function globalPoint(){
    if(gameOn){
        //Ajout du score Round au score Global
        globalScore[activePlayer] += roundScore;
        //Affichage du score Global
        document.querySelector('#score-global-player-' + activePlayer).textContent = globalScore[activePlayer];
        //Vérification si le joueur a gagné
        if(globalScore[activePlayer] >= 100){
            alert('fonctionne')
            document.querySelector('#name-player-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-box').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-box').classList.remove('active');
            gameOn == false;
        }else{
            nextPlayer();
        }
    }
}

document.querySelector('.btn-new-game').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', globalPoint);