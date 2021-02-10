{
const playGame = function(playerInput){
  clearMessages();
  const getMoveName = function(argMoveId){
    if(argMoveId == 1) {
      return 'kamień';
    }
    else if (argMoveId == 2) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  const displayResult = function(ComputerMove, PlayerMove){
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
    if( computerMove == 'kamień' && playerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'kamień' && playerMove == 'nożyce' ) {
      printMessage('Ty przegrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'nożyce' ) {
      printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'kamień' ) {
      printMessage('Ty przegrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'kamień' ) {
      printMessage('Ty wygrywasz');
    }
    else if (computerMove == 'nożyce' && playerMove == 'papier' ) {
      printMessage('Ty przegrywasz!');
    }
    else if (computerMove == 'kamień' && playerMove == 'kamień' ) {
      printMessage('Remis!');
    }
    else if (computerMove == 'papier' && playerMove == 'papier' ) {
      printMessage('Remis!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'nożyce' ) {
      printMessage('Remis!');
    }
    else {
      printMessage ('Nie ma wyniku');
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  console.log('Gracz wpisał: ' + playerInput);
  const playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
