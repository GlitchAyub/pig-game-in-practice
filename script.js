/*
game rules:
- the game has 2 players, playing in the rounds.
- in each turn a player rolls a dice as many times as he wishes. each result get added to his round
score
- but, if the player rolls a1, all his round score get lost.after that, its the next player's turn
-the player can choose to 'hold' which means that his round score gets added to his global score. after that,
 its the next player's turn
-the first player to reach 100 points on global score win the game


*/
var scores,roundScore,activePlayer,gamePlaying;
init();


//floor clear the decimal value and gives in intiger value, random()give arandom value math is the method
//seter becuase we set a value
//document.querySelector('#current-'+activePlayer).textContent = dice;//textcontent only change text and no 
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+ dice+'</em>';//interhtml change hole html section

// reading with dom
//getter because we get a value
//var x =document.querySelector('#current-1').textContent;
//console.log(x);
//manipulating css with querrySelector
//document.querySelector('.dice').style.display = 'none';

//event handler


document.querySelector('.btn-roll').addEventListener('click',function() {
    if(gamePlaying){
            //1. random number
    var dice = Math.floor(Math.random()*6)+1;
    //2. display the result
    var dicedom =document.querySelector('.dice');
    dicedom.style.display = 'block';
    dicedom.src = 'dice-' + dice + '.png';

    //3 update the round score if the rolled number was not a 1
    if(dice!==1){
        //aad a number
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    else{
        //next player
        nextPlayer();
    }
    }


});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
//add a current score to global score
scores[activePlayer]+=roundScore;

//update the UI
document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

//check if player won the game
if(scores[activePlayer]>=100){
    document.querySelector('#name-'+activePlayer).textContent='winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active1');
    gamePlaying=false;
}
else{
//next player
nextPlayer();
}

   }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active1');
    document.querySelector('.player-1-panel').classList.toggle('active1');

    document.querySelector('.dice').style.display='none';

}
//new game button

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
scores =[0,0];
roundScore = 0;
activePlayer =0;
gamePlaying=true;

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

document.querySelector('#name-0').textContent='PLAYER 1';
document.querySelector('#name-1').textContent='PLAYER 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active1');
document.querySelector('.player-1-panel').classList.remove('active1');
document.querySelector('.player-0-panel').classList.add('active1');

document.querySelector('.dice').style.display='none';
}





                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            