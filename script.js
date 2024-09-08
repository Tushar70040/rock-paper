const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerscore = document.querySelector("#humanscore");
const computerscore = document.querySelector("#com");


const tie = document.querySelector("#tie");
const round = document.querySelector("#round");
const result = document.querySelector("#result");


const comChoice= () => {// computer choice
    let choice = ["rock","paper","scissors"];
    let ranNum = Math.floor(Math.random()*3);
    console.log("computer choice ",choice[ranNum]);
     return choice[ranNum];
    
};

function namebtn(buttonname){
    console.log( "you choose "+ buttonname);
}
// all the buttons

rock.addEventListener("click",()=>{
    namebtn("rock");
    playRound("rock",comChoice());
});
paper.addEventListener("click",()=>{
    namebtn("paper");
    playRound("paper",comChoice());
});
scissors.addEventListener("click",()=>{
    namebtn("scissors");
    playRound("scissors",comChoice());
});


function playRound(human, computer) {// gam main logic 
    if(currRound <= totalRound){
    if(human === computer){
        //console.log("the match is draw");
        draw++;
    }
    else if(human === "rock"&& computer === "scissors"||
        human === "paper"&& computer === "rock"||
        human === "scissors"&& computer ===  "paper"){
          
          //  console.log(`you win! ${human} beats ${computer}`);
            humanscore++;
        }
        else{
            //console.log(`you lose! ${computer} beats ${human}`);
            compscore++;
        }

        playerscore.textContent = `PLAYER SCORE : ${humanscore}`;
        computerscore.textContent = `COMPUTER SCORE : ${compscore}`;
        round.textContent = `ROUND ${currRound} of ${totalRound}`;
        currRound++;
        tie.textContent = `DRAW : ${draw}`;
  }
  if (currRound > totalRound) {
    concludeGame();
 }
};


  let humanscore = 0;
  let compscore = 0;
  let draw = 0;
  let currRound = 1;
  let totalRound = 5;

  function concludeGame() {// for the result
    let finalResult = '';
  
    if (humanscore > compscore) {
      finalResult = 'Congratulations, you won the game!';
    } else if (humanscore < compscore) {
        finalResult = 'Game over, the computer wins!';
    } else {
        finalResult = 'The game ends in a draw!';
    }
  
     result.textContent = finalResult +" press f5 to restart";

     rock.disabled = true;
     paper.disabled = true;
     scissors.disabled = true;
  }

 