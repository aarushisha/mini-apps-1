
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import Circle from './components/Circle.jsx';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      playerIsRed: true,
      board: [
        ['x','x','x','x','x','x','x'], 
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
      ],
      announcement: '',
      redWins: 0,
      yelWins: 0,
    }
    this.playerMakesMove = this.playerMakesMove.bind(this);
  }

  detectTie() {
    if (this.state.turn === 42) {
      alert('tie game! please select new game to refresh the board!');
    }
  }

  detectWin() {
    this.detectVerticalWin();
    this.detectHorizontalWin();
    this.detectDiagonalWinFromBottomLeft();
    // this.detectDiagonalWinFromBottomRight();
    this.detectDiagonalWinFromTopLeft();
    // this.detectDiagonalWinFromTopRight();

  }

  detectVerticalWin(row, col) {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 7; c++) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c], this.state.board[r + 2][c], this.state.board[r + 3][c]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c], this.state.board[r + 2][c], this.state.board[r + 3][c]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    }


  }

  detectHorizontalWin() {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 4; c++) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r][c + 1], this.state.board[r][c + 2], this.state.board[r][c + 3]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r][c + 1], this.state.board[r][c + 2], this.state.board[r][c + 3]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    }
  }

  detectDiagonalWinFromTopRight() {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 4; c++) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c + 1], this.state.board[r + 2][c + 2], this.state.board[r + 3][c + 3]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c + 1], this.state.board[r + 2][c + 2], this.state.board[r + 3][c + 3]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    }
  }

  detectDiagonalWinFromBottomRight() {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 5; r > 2; r--) {
      for (var c = 0; c < 4; c++) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r - 1][c + 1], this.state.board[r - 2][c + 2], this.state.board[r - 3][c + 3]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r - 1][c + 1], this.state.board[r - 2][c + 2], this.state.board[r - 3][c + 3]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    }
  }

  detectDiagonalWinFromTopLeft() {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 0; r < 3; r++) {
      for (var c = 6; c > 2; c--) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c - 1], this.state.board[r + 2][c - 2], this.state.board[r + 3][c - 3]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r + 1][c - 1], this.state.board[r + 2][c - 2], this.state.board[r + 3][c - 3]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    }
  }

  detectDiagonalWinFromBottomLeft() {
    var redWin = [true, true, true, true];
    var yelWin = [false, false, false, false];
    for (var r = 5; r > 2; r--) {
      for (var c = 6; c > 2; c--) {
        if (JSON.stringify([this.state.board[r][c], this.state.board[r - 1][c - 1], this.state.board[r - 2][c - 2], this.state.board[r - 3][c - 3]]) === JSON.stringify(redWin)) {
          alert('Player Red is the Winner!');
          this.setState({announcement: 'Player Red is the Winner! Click "New Game" to play again!', redWins: this.state.redWins + 1})
        }
        if (JSON.stringify([this.state.board[r][c], this.state.board[r - 1][c - 1], this.state.board[r - 2][c - 2], this.state.board[r - 3][c - 3]]) === JSON.stringify(yelWin)) {
          alert('Player Yellow is the Winner!');
          this.setState({announcement: 'Player Yellow is the Winner! Click "New Game" to play again!', yelWins: this.state.yelWins + 1})
        }
      }
    } 
  }


  updateBoard(row, column, board) {
    var newBoard = board.slice();
    newBoard[row][column] = this.state.playerIsRed;
    return newBoard;
  }

  playerMakesMove(event) {
    var layout = document.getElementsByClassName('circle');
    var row;
    var col = parseInt(event.target.textContent.slice(3));
    for (var i = 5; i >= 0; i--) {
      if (this.state.board[i][col] === 'x') {
        row = i;
        break;
      } 
    }
    var stringLoc = `${row}, ${col}`;
    for (var i = 0; i < layout.length; i++) {
      if (layout[i].innerHTML === stringLoc) {
        if (this.state.playerIsRed) {
          layout[i].style.backgroundColor = 'red';
          layout[i].style.color = 'red';
        } else {
          layout[i].style.backgroundColor = 'yellow';
          layout[i].style.color = 'yellow';
        }
      }
 
    }
    this.setState ({
      turn: this.state.turn + 1,
      playerIsRed: !this.state.playerIsRed, 
      board: this.updateBoard(row, col, this.state.board)
    })

    this.detectTie();
    this.detectWin();
  }

  resetBoard() {
    var layout = document.getElementsByClassName('circle');
    for (var i = 0; i < layout.length; i++) {
      layout[i].style.backgroundColor = 'white';
      layout[i].style.color = 'white';
    }
    this.setState( {
      turn: 1,
      playerIsRed: true,
      board: [
        ['x','x','x','x','x','x','x'], 
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x'],
      ],
      announcement: '',
    });
  }

  render() {

    const circles = [];
    for (var r = 0; r <=5; r++) {
      for (var c = 0; c < 7; c++) {
        //key -> identify circle?
        circles.push(<Circle playerMakesMove={this.playerMakesMove} key={`${r},${c}`} r={r} c={c}/>)
      }
    }
    return (
        <div>
          <div id='announcement'>{this.state.announcement}</div>
          <div id='redWins'>Player Red Wins: {this.state.redWins}</div>
          <div id='yelWins'>Player Yellow Wins: {this.state.yelWins}</div>
          <div id="player">Current player: {this.state.playerIsRed ? 'Player Red' : "Player Yellow"} </div>
          <br></br>
          <div className = "grid">
          {circles}
          </div>
          <button id="newGame" onClick={this.resetBoard.bind(this)}>New Game</button>
        </div>
    )
  }
}


ReactDOM.render(<Board />,  document.getElementById("board"));