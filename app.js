const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = [r,p,s];
    console.log(Math.random());
}

getComputerChoice();

function game(userChoice){
    console.log(userChoice)
}

function main(){
rock_div.addEventListener('click', function(){
game("r");
//console.log("Hey you clicked on rock");
})

paper_div.addEventListener('click', function(){
game("p");
//console.log("Hey you clicked on paper");
})

scissors_div.addEventListener('click', function(){
game("s");
//console.log("Hey you clicked on scissors")
})

}

main();