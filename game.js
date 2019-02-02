const MAX_TURNS = 9;
//Counter to keep track of times played, so that it switches from x, and o
let counter = 0;
let squares = document.getElementsByClassName('square')

function playTurn(e){
    let play = document.querySelector('#' + this.id);
    if (counter % 2 === 0){
        play.innerHTML = 'X';
        counter++;

    }
    else if (counter % 2 !== 0){
        play.innerHTML = 'X';
        counter++;
    }
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
        squares[i].addEventListener('click', playTurn);
    
}