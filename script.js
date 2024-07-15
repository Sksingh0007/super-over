'use strict';
 

const btnstrike = document.getElementById('strike');
const btnreset = document.getElementById('reset');

 


const $score1 = document.getElementById('score-team1');
const $score2 = document.querySelector('#score-team2');
const $wicket1 = document.getElementById('wickets-team1');
const $wicket2 = document.getElementById('wickets-team2');

const possibleOutcomes = [0, 1 ,2 ,3 ,4 ,5 ,6 , 'W'];

let score1 = 0;
let score2 = 0;
let wicket1 = 0;
let wicket2 = 0;
let team1BallsFaced = 0;
let team2BallsFaced = 0;
let turn = 1;


//RESSET
btnreset.addEventListener('click', function(){
    window.location.reload();
});

//GAME OVER
function gameOver(){
    if(score1 > score2) alert('India wins!!!💕');
    else if(score2 > score1) alert('Pak Wins!!🤦‍♂️');
    else alert("Time for another superover!🥳");
}

//UPDATE SCORE
function updateScore(){
    $score1.textContent = score1;
    $wicket1.textContent = wicket1;
    $score2.textContent = score2;
    $wicket2.textContent = wicket2;
}



//STRIKE
btnstrike.addEventListener('click', function(){
     //genarate random values
    const random = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
    //check for turn , update score, 

    //second batting
    if(turn === 2){
        //increase the ball count
        team2BallsFaced++;
        //**update score for the ball
        document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`).textContent = random;
        //if wickets , update $wickets variable
        if(random === "W"){
            wicket2++;
        }
        //else update the score
        else{
            score2 += random;
        }
          //game over condition
    if(team2BallsFaced === 6 || wicket2 === 2 || score2 > score1){
        turn === 3;
        gameOver();
    }
    }

    if(turn === 1){
        team1BallsFaced++;
        document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`).textContent = random;
        if(random == "W"){
            wicket1++;
        }
        else{
            score1 += random;
        }

        if(team1BallsFaced === 6 || wicket1 === 2) turn = 2;
        updateScore();
    }
      
});





