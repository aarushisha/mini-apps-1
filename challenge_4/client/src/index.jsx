console.log('hi');
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import Circle from './components/Component1.jsx';

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

  playerClick(event) {
    if (this.state.playerIsRed && event.target.style.backgroundColor === '') {
      event.target.style.backgroundColor = "red";
      this.setState((state, props) => {
        return {turn: state.turn + 1, playerIsRed: !state.playerIsRed};
      });
    } else if (!this.state.playerIsRed && event.target.style.backgroundColor === '') {
      event.target.style.backgroundColor = "yellow";
      this.setState((state, props) => {
        return {turn: state.turn + 1, playerIsRed: !state.playerIsRed};
      });
    }
    console.log(this.state);

  }

  render() {

    const circles = [];
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 7; c++) {
        circles.push(<Circle c={c} r={r}/>)
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