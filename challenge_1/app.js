// console.log('hello from tic tac toe!');

//need to add event listener to each square

var squares = document.getElementsByClassName('square');
// console.log(squares);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', alert('hi'));
}

