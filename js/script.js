const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty')
  
  
/**
 * Describe this function...
 */
function getMoveName (move) {
  console.log('wywołano funkcję getMoveName: ' + move);
  if (move == 1) {
    return 'rock';
  } else if (move == 2) {
    return 'paper';
  } else if (move == 3) {
    return 'scissors';
  } else {
    printMessage('Nie znam ruchu o id ' + move + '. Zakładam, że chodziło o "rock".');
    return 'kamień';
  }
}

const playerMove = buttonName;
console.log('player move is: ' + playerMove);
const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
const computerMove = getMoveName (randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove); 

;
}

/**
 * Describe this function...
 */

function displayResult (playerMove, computerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
  if (playerMove == 'paper' && computerMove == 'rock') {
    printMessage('YOU WIN!');
  } else if (playerMove == 'rock' && computerMove == 'scissors') {
    printMessage('YOU WIN!!');
  } else if (playerMove == 'scissors' && computerMove == 'paper') {
    printMessage('YOU WIN!!');
  } else if (playerMove == computerMove) {
    printMessage('ROW!');
  } else {
    printMessage('YOU LOSE :(');
  }
  printMessage('I played ' + computerMove + ', and you played ' + playerMove);
}


buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });




