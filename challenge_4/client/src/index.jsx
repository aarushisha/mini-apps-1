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
    return (
        <div>
          <div id="player">Current player: {this.state.playerIsRed ? 'red' : "yellow"} </div>
          <br></br>
          <table id="connect4board">
          <tbody>
            <tr className="row1">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr className="row2">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr className="row3">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr className="row4">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr className="row5">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr className="row6">
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            </tbody>
          </table>
          <button id="newGame">New Game</button>
        </div>
    )
  }
}


ReactDOM.render(<Board />,  document.getElementById("board"));