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


  updateBoard(row, column, board) {
    var newBoard = board.slice();
    newBoard[row][column] = this.state.playerIsRed;
    return newBoard;
  }

  playerMakesMove(event) {
    var layout = document.getElementsByClassName('circle');
    console.log(layout);
    var row;
    var col = parseInt(event.target.textContent.slice(3));
    console.log(col);
    for (var i = 5; i >= 0; i--) {
      if (this.state.board[i][col] === 'x') {
        row = i;
        break;
      }
    }
    console.log('player has made a move');
    var stringLoc = `${row}, ${col}`;
    console.log(stringLoc);
    for (var i = 0; i < layout.length; i++) {
      if (layout[i].innerHTML === stringLoc) {
        console.log(layout[i]);
        console.log(layout[i].innerHTML);
        console.log(true);
        if (this.state.playerIsRed) {
          layout[i].style.backgroundColor = 'red';
        } else {
          layout[i].style.backgroundColor = 'yellow';
        }
      }
 
    }
    this.setState ({
      turn: this.state.turn + 1,
      playerIsRed: !this.state.playerIsRed, 
      board: this.updateBoard(row, col, this.state.board)
    })
    console.log(this.state.board);
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
          <button id="newGame">New Game</button>
        </div>
    )
  }
}


ReactDOM.render(<Board />,  document.getElementById("board"));