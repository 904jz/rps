const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const list = document.querySelector("ul");
const div = document.querySelector("div");
var playerScore = 0;
var cpuScore = 0;
const scoreboard = document.querySelector("#scoreboard");

// add event listeners for buttons, pass player choice to fn
rock.addEventListener('click',function (){
    playRound("rock");
});
paper.addEventListener('click',function (){
    playRound("paper");
});
scissors.addEventListener('click',function (){
    playRound("scissors");
});


// game logic
function playRound(userChoice){
    const player = userChoice;
    const cpu = getCpuChoice();
    const item = document.createElement("li");
    const result = document.createElement("span");
    scoreboard.style.color = "black";

    

    if (player == "rock"){
        if (cpu == "scissors"){
            result.textContent = "Rock beats Scissors";
            result.style.color = "green";
            playerScore += 1;
        }else if (cpu == "paper"){
            result.textContent = "Paper covers Rock";
            result.style.color = "red";
            cpuScore += 1;
        }else{
            result.textContent = "TIE";
        }
    }else if (player == "paper"){
        if (cpu == "rock"){
            result.textContent = "Paper covers Rock";
            result.style.color = "green";
            playerScore += 1;
        }else if (cpu == "scissors"){
            result.textContent = "Scissors cuts Paper";
            result.style.color = "red";
            cpuScore += 1;
        }else{
            result.textContent = "TIE";
        }

    }else{
        if (cpu == "paper"){
            result.textContent = "Scissors cuts Paper";
            result.style.color = "green";
            playerScore += 1;
        }else if (cpu == "rock"){
            result.textContent = "Rock beats Scissors";
            result.style.color = "red";
            cpuScore += 1;
            
        }else{
            result.textContent = "TIE";
        }
    }

    item.appendChild(result);
    list.appendChild(item);
    scoreboard.textContent = "Player " +  playerScore + " - " + cpuScore + " CPU";

    checkGameOver();




    
}


// gets random choice from array of options
function getCpuChoice(){
    const choices = ['rock','paper','scissors'];
    const index = Math.floor(Math.random()*choices.length);

    return choices[index];
}


// see if game is over yet
function checkGameOver(){
    if (playerScore == 5){
        list.replaceChildren();
        scoreboard.textContent = "Player Wins";
        scoreboard.style.color = "green";
        playerScore = 0;
        cpuScore = 0;
        return true;
    }else if (cpuScore == 5){
        list.replaceChildren();
        scoreboard.textContent = "CPU Wins";
        scoreboard.style.color = "red";
        playerScore = 0;
        cpuScore = 0;

        return true;
    }else{
        return false;
    }
}
