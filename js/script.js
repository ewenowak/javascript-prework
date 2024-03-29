{
const playGame = function (playerInput){
    clearMessages();

    const getMoveName = function (argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    const displayResults = function (argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
            printMessage('Remis!');
        } else if(( argComputerMove == 'kamień' && argPlayerMove == 'papier') || ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            printMessage('Ty wygrywasz!');
        } else if(( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || ( argComputerMove == 'papier' && argPlayerMove == 'kamień') || ( argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Ty przegrywasz!');
        } else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Nie ma wyniku!');
        } 
    }
    displayResults(argComputerMove, argPlayerMove);
    console.log(getMoveName('2'));
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