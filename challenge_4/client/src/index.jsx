console.log('hi');
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
// import Circle from 'component1';



class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      playerIsBlue: true,
    }
  }


  playerClick(event) {
    this.setState((state, props) => {
      return {turn: state.turn + 1, playerIsBlue: !state.playerIsBlue};
    });
    console.log(this.state);

  }

  render() {
    return (
        <div>
          <div id="player">Current player: {this.state.playerIsBlue ? 'blue' : "red"} </div>
          <br></br>
          <table id="connect4board">
          <tbody>
            <tr>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
              <td onClick={this.playerClick.bind(this)}></td>
            </tr>
            <tr>
              <td onClick={this.playerClick.bind(this)}></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}


ReactDOM.render(<Board />,  document.getElementById("board"));