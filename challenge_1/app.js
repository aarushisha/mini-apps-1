// console.log('hello from tic tac toe!');

//need to add event listener to each square

var squares = document.getElementsByClassName('square');
// console.log(squares);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    addPlay(event);
  });
}

//how to track who made the last move? 

var count = 0;
var addPlay = function(event) {
  if (event.target.innerHTML !== "") {
    alert('play cannot be made because the square is not empty');
  } else if (count % 2 === 0) {
    event.target.innerHTML = 'X';
    count++;
  } else {
    event.target.innerHTML = 'O';
    count++;     
  }
}