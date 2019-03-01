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
    newBoard

  }

  playerMakesMove(event) {
    var row = parseInt(event.target.textContent.slice(0,1));
    var col = parseInt(event.target.textContent.slice(3));
    console.log(row);
    console.log(col);
    console.log('player has made a move');
    this.setState ({
      turn: this.state.turn + 1,
      playerIsRed: !this.state.playerIsRed, 
    })
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