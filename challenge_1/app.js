

var squares = document.getElementsByClassName('square');


var reset = document.getElementsByClassName('reset');
var count = 0;
var xWins = 0;
var oWins = 0;

var xWin = document.getElementsByClassName('x-wins');
var oWin = document.getElementsByClassName('o-wins');

xWin[0].textContent = xWins;
oWin[0].textContent = oWins;

var player  = document.getElementsByClassName('player');
player[0].textContent = 'X';

var winner = document.getElementsByClassName('winner');


var win = false; 
reset[0].addEventListener('click', (event) => {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
  count = 0;
  player[0].textContent = 'X';
  winner[0].textContent  = '';
  win = false;
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
    player[0].textContent = 'O';
    checkBoard();
  } else {
    event.target.innerHTML = 'O';
    count++; 
    player[0].textContent = 'X';
    checkBoard(); 
  }
}

var checkBoard = function() {
  checkForHorizontalWin();  
  checkForVerticallWin();
  checkForDiagonalWin();
  checkAllSquaresFull();  
}

//pass in winner
var winForX = function() {
  win = true;
  alert("Player X has won the game! Select Reset Game to play again!");
  winner[0].textContent = 'Player X Wins!';
  xWins++;
  xWin[0].textContent = xWins;
  oWin[0].textContent = oWins;
}

var winForO = function() {
  win = true;
  alert("Player O has won the game! Select Reset Game to play again!");
  winner[0].textContent = 'Player O Wins!';
  oWins++;
  xWin[0].textContent = xWins;
  oWin[0].textContent = oWins;
}

var checkForHorizontalWin = function() {
  if (squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X') {
    winForX();
  }
  if (squares[0].textContent === 'O' && squares[1].textContent === 'O' && squares[2].textContent === 'O') {
    winForO();
  }
  if (squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X') {
    winForX();
  }
  if (squares[3].textContent === 'O' && squares[4].textContent === 'O' && squares[5].textContent === 'O') {
    winForO();
  }
  if (squares[6].textContent === 'X' && squares[7].textContent === 'X' && squares[8].textContent === 'X') {
    winForX();
  }
  if (squares[6].textContent === 'O' && squares[7].textContent === 'O' && squares[8].textContent === 'O') {
    winForO();
  }
}

var checkForVerticallWin = function() {
  if (squares[0].textContent === 'X' && squares[3].textContent === 'X' && squares[6].textContent === 'X') {
    winForX();
  }
  if (squares[0].textContent === 'O' && squares[3].textContent === 'O' && squares[6].textContent === 'O') {
    winForO();
  }
  if (squares[1].textContent === 'X' && squares[4].textContent === 'X' && squares[7].textContent === 'X') {
    winForX();
  }
  if (squares[1].textContent === 'O' && squares[4].textContent === 'O' && squares[7].textContent === 'O') {
    winForO();
  }
  if (squares[2].textContent === 'X' && squares[5].textContent === 'X' && squares[8].textContent === 'X') {
    winForX();
  }
  if (squares[2].textContent === 'O' && squares[5].textContent === 'O' && squares[8].textContent === 'O') {
    winForO();
  }
}

var checkForDiagonalWin = function() {
  if (squares[0].textContent === 'X' && squares[4].textContent === 'X' && squares[8].textContent === 'X') {
    winForX();
  }
  if (squares[0].textContent === 'O' && squares[4].textContent === 'O' && squares[8].textContent === 'O') {
    winForO();
  }
  if (squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X') {
    winForX();
  }
  if (squares[2].textContent === 'O' && squares[4].textContent === 'O' && squares[6].textContent === 'O') {
    winForO();
  }
}


var checkAllSquaresFull = function() {
  if (count === 9) {
    if(win !== true) {
      alert('Tie Game! Select Reset Game to play again!');
      winner[0].textContent = 'Tie Game!';
    }
  }
}