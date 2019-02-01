var squares = document.getElementsByClassName('square')
function playTurn(e) {
    var play = document.querySelector('#'+ this.id);
    console.log(this.id);
    play.innerHTML = this.id;
    // var input = document.querySelector('this.id')
}
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', playTurn);
}