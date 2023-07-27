
//////////////////////////// 2 players //////////////////////////////

let GameChoice = [];




const createObutton = document.querySelector('.func-button-1');
createObutton.addEventListener('click',() => {
GameChoice.splice(0,2) ;
GameChoice.push('⭕');

});


const createXbutton = document.querySelector('.func-button-2');
createXbutton.addEventListener('click',() => {
GameChoice.splice(0,2);
GameChoice.push('❌');
});


function PlayGame(playerMove, index) {
    const ticBox = document.querySelector(`.Tic-Box-${index}`);
    if (GameChoice.length > 0 && !ticBox.disabled) {
      if (playerMove === GameChoice) {
        ticBox.innerHTML = playerMove;
        ticBox.disabled = true;
        botMove();
      }
    }
}

function updateButtons() {
  for (let i = 1; i <= 9; i++) {
    const ticBox = document.querySelector(`.Tic-Box-${i}`);
    ticBox.innerHTML = '';
    ticBox.disabled = false;
    GameChoice = [];
  }
}


const restGame =  document.querySelector('.func-button-rest');
restGame.addEventListener('click',() => {
    updateButtons();
})


//////////////////////////////// Single Player //////////////////////////////////



function computerMove(GameChoice){
    let computerChoice = '';
  
    if(GameChoice === '❌'){
        computerChoice = '⭕';
    }else if(GameChoice === '⭕'){
        computerChoice = '❌';
    }
    return computerChoice;
}

function randomTicBox() {
    const randomIndex = Math.floor(Math.random() * 9) + 1  ;
    const ticChoice = document.querySelector(`.Tic-Box-${randomIndex}`);
    return ticChoice;
}


function botMove() {
  const ticBox = randomTicBox();
  if (!ticBox.disabled) {
    const botChoice = computerMove(GameChoice[0]);
    ticBox.innerHTML = botChoice;
    ticBox.disabled = true;
    GameChoice = GameChoice.reverse(); // switch game choice for next turn
  } else {
    botMove(); // try again if selected Tic Box is disabled
  }
}

////////////////// Condition for PlayGame Mode //////////////////////////////////
/////////////////// Update Later /////////////////////////////////////////


const MultiPlayer = document.querySelector('.Single-play-button');
  MultiPlayer.addEventListener('click', () => {
    
});


const singlePlayer = document.querySelector('.Single-play-button');
singlePlayer.addEventListener('click', () => {
    
});






