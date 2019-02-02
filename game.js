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
    return (a === b) && (b === c);

}
function checkHorizontal(){
    return (checker(pos[1],pos[2],pos[3]) ||
            checker(pos[4],pos[5],pos[6])||
            checker(pos[7],pos[8],pos[9])
    )
}
//Add event listener to each of the squares
for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', playTurn);
    
}