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
//Function that resets the board 
function clearBoard(){
    for (let i = 0; i < squares.length; i++){
        squares[i].innerHTML = '';
    }
}
function checker(a,b,c){
    
}
//Add event listener to each of the squares
for (let i = 0; i < squares.length; i++) {
    if (i % 2 == 0){
        squares[i].addEventListener('click', playTurnX);
    }
    else{
        squares[i].addEventListener('click', playTurnO);
    }
    
}