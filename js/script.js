let buttonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty')
  
  
/**
 * Describe this function...
 */
let move;
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
let randomNumber;
playerMove = buttonName;
console.log('player move is: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName (randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove); computerMove, playerMove, randomNumber;

;
}

/**
 * Describe this function...
 */
let computerMove;
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




