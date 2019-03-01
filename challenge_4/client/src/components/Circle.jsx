import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

class Circle extends Component {

  clickCircle(event) {
    console.log(`You have clicked row ${this.props.r}, column ${this.props.c}`);
    console.log(this.props);
    // event.target.style.backgroundColor = 'red';
  }

  render() {
    return (
      <div onClick={this.props.playerMakesMove} className="circle">{this.props.r}, {this.props.c}</div>
    )
  }

}

export default Circle;