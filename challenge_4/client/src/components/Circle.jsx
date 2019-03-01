import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

class Circle extends Component {


  render() {
    return (
      <div onClick={this.props.playerMakesMove} className="circle">{this.props.r}, {this.props.c}</div>
    )
  }

}

export default Circle;