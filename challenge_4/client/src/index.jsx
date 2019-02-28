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
        [], //each one is the column
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    }
  }

  render() {

    const circles = [];
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 7; c++) {
        circles.push(<Circle key={`${r},${c}`} r={r} c={c}/>)
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