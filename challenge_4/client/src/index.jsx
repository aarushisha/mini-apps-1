console.log('hi');
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import Circle from './components/Circle.jsx';

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
    }
    this.playerMakesMove = this.playerMakesMove.bind(this);
  }

  detectTie() {
    if (this.state.turn === 42) {
      alert('tie game! please select new game to refresh the board!');
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

    this.detectTie()
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
          <div id="player">Current player: {this.state.playerIsRed ? 'red' : "yellow"} </div>
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