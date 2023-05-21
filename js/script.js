var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty')
  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "rock".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
    printMessage('YOU WIN!');
  } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
    printMessage('YOU WIN!!');
  } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
    printMessage('YOU WIN!!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('ROW!');
  } else {
    printMessage('YOU LOSE :(');
  }
  printMessage('I played ' + argComputerMove + ', and you ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('player move is: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

;
}

buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });




