const comChoice= () => {
    let choice = ["rock","paper","scissors"];
    let ranNum = Math.floor(Math.random()*3);
    console.log("computer choice ",choice[ranNum]);
     return choice[ranNum];
    
};

//console.log( "computer choice is ",comChoice());


const getHumanChoice =() =>{
    let choices = ["rock","paper","scissors"];
    
    let choice = prompt("enter the choice(rock,paper,scissors).").toLowerCase();
    console.log("your choice ",choice);
    while(!choices.includes(choice)){
        choice = prompt("invalid choice try again");
    }
    return choice;

};

//console.log("Your choice:", getHumanChoice());


function playRound(human, computer) {
    if(human === computer){
        console.log("the match is draw");
        draw++;
    }
    else if(human === "rock"&& computer === "scissors"||
        human === "paper"&& computer === "rock"||
        human === "scissors"&& computer ===  "paper"){
            console.log(`you win! ${human} beats ${computer}`);
            humanscore++;
        }
        else{
            console.log(`you lose! ${computer} beats ${human}`);
            computerscore++;
        }
  };

  //playRound(getHumanChoice(),comChoice());
  let humanscore = 0;
  let computerscore = 0;
  let draw = 0;


  const playgame =()=>{
    playRound(getHumanChoice(),comChoice());

  };


  for(let i = 1;i<=5;i++){
    playgame();
  }

 

  console.log(`your final score is ${humanscore} and computer score is ${computerscore} .the match draw ${draw}times `);
