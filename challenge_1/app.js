// console.log('hello from tic tac toe!');

//need to add event listener to each square

var squares = document.getElementsByClassName('square');
// console.log(squares);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    addX(event);
  });
}

var addX = function(event) {
  if (event.target.innerHTML !== "") {
    console.log('play cannot be made because the square is not empty');
  } else {
    event.target.innerHTML = 'X';
  }
}