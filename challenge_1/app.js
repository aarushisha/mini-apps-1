// console.log('hello from tic tac toe!');

//need to add event listener to each square

var squares = document.getElementsByClassName('square');
// console.log(squares);

var reset = document.getElementsByClassName('reset');

reset[0].addEventListener('click', (event) => {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
})


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    addPlay(event);
  });
}

//how to track who made the last move? 

var count = 0;
var addPlay = function(event) {
  if (event.target.innerHTML !== "") {
    alert('Please select an empty square!');
  } else if (count % 2 === 0) {
    event.target.innerHTML = 'X';
    count++;
  } else {
    event.target.innerHTML = 'O';
    count++;     
  }
}

var checkForHorizontalWin = function() {

}

var checkForVerticallWin = function() {
  
}

var checkForDiagonalWin = function() {
  
}