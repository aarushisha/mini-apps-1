// console.log('hello from tic tac toe!');

//need to add event listener to each square

var squares = document.getElementsByClassName('square');
console.log(squares);

var reset = document.getElementsByClassName('reset');
var count = 0;

reset[0].addEventListener('click', (event) => {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    count = 0;
  }
})


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    addPlay(event);
  });
}



var addPlay = function(event) {
  if (event.target.innerHTML !== "") {
    alert('Please select an empty square!');
  } else if (count % 2 === 0) {
    event.target.innerHTML = 'X';
    count++;
    checkForHorizontalWin();
    checkForVerticallWin();
    checkForDiagonalWin();
    checkAllSquaresFull();
  } else {
    event.target.innerHTML = 'O';
    count++; 
    checkForHorizontalWin();  
    checkForVerticallWin();
    checkForDiagonalWin();
    checkAllSquaresFull();  
  }
}

var win = false; 
var checkForHorizontalWin = function() {
  if (squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[0].textContent === 'O' && squares[1].textContent === 'O' && squares[2].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }
  if (squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[3].textContent === 'O' && squares[4].textContent === 'O' && squares[5].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }
  if (squares[6].textContent === 'X' && squares[7].textContent === 'X' && squares[8].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[6].textContent === 'O' && squares[7].textContent === 'O' && squares[8].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }

}

var checkForVerticallWin = function() {
  if (squares[0].textContent === 'X' && squares[3].textContent === 'X' && squares[6].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[0].textContent === 'O' && squares[3].textContent === 'O' && squares[6].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }
  if (squares[1].textContent === 'X' && squares[4].textContent === 'X' && squares[7].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[1].textContent === 'O' && squares[4].textContent === 'O' && squares[7].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }
  if (squares[2].textContent === 'X' && squares[5].textContent === 'X' && squares[8].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[2].textContent === 'O' && squares[5].textContent === 'O' && squares[8].textContent === 'O') {
    win = true;
    alert("Player O has won the game! Select Reset Game to play again!");
  }
  
}

var checkForDiagonalWin = function() {
  if (squares[0].textContent === 'X' && squares[4].textContent === 'X' && squares[8].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[0].textContent === 'O' && squares[4].textContent === 'O' && squares[8].textContent === 'O') {
    win = true;
    alert("Player 0 has won the game! Select Reset Game to play again!");
  }
  if (squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X') {
    win = true;
    alert("Player X has won the game! Select Reset Game to play again!");
  }
  if (squares[2].textContent === 'O' && squares[4].textContent === 'O' && squares[6].textContent === 'O') {
    win = true;
    alert("Player 0 has won the game! Select Reset Game to play again!");
  }
  
}

var checkAllSquaresFull = function() {
  var fullSquares = 0;
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].textContent !== '') {
      fullSquares++;
    }
  }
  if (fullSquares === 9 &&  win === false) {
    //only want to alert if no other alert is on the page
    alert('Tie Game! Select Reset Game to play again!');
  }

}