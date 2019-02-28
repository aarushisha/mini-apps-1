import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

class Circle extends Component {

  render() {
    return (
      <div>
      <div className="circle">{this.props.r}, {this.props.c}</div>
      </div>
    )
  }

}

export default Circle;