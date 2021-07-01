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
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML=computerScore;

}

function lose(){

}

function draw(){

}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS.");
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("ITS A DRAW.");
        break;
        
    
    }
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