var squares = document.getElementsByClassName('square')
function playTurn(e){
console.log(this.id);
    // var input = document.querySelector('this.id')
}
for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',playTurn);
}