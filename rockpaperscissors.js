let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userChoicePar=document.querySelector("#user-score");
const compChoicePar=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.style.backgroundColor="#081b31";
    msg.innerText="Game was Draw! Play again.";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userChoicePar.innerText=userScore;
        console.log("you win");
        msg.style.backgroundColor="green";
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        compChoicePar.innerText=compScore;
        console.log("you loss");
        msg.style.backgroundColor="red";
        msg.innerText=`You Loss! ${compChoice} bests your ${userChoice}`;
    }
}

const playGame=(userChoice)=>{
    //user choice
    console.log(userChoice);
  //computer choice
  const compChoice=getCompChoice();

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin=true;
    if(userChoice === "rock"){
        //paper, scissor
        userWin=(compChoice === "paper")? false : true;
    }else if(userChoice === "paper"){
        // rock, scissor
        userWin=(compChoice === "rock")? true : false;
    }else{
        // paper, rock
        userWin=(compChoice === "paper")? true : false; 
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});