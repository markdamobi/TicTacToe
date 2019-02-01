const MAX_TURNS = 9;
var squares = document.getElementsByClassName('square')
function playTurnX(e) {
    var play = document.querySelector('#'+ this.id);
    console.log(this.id);
    play.innerHTML = 'X';
    // var input = document.querySelector('this.id')
}
function playTurnO(e) {
    var play = document.querySelector('#'+ this.id);
    console.log(this.id);
    play.innerHTML ='O';
    // var input = document.querySelector('this.id')
}
//Function that resets the board when the game is over 
function clearBoard(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = '';
    }
}
//Game Loop 
for (let i = 0; i < squares.length; i++) {
    if (i % 2 == 0){
        squares[i].addEventListener('click', playTurnX);
    }
    else{
        squares[i].addEventListener('click', playTurnO);
    }
    
}
clearBoard(squares);