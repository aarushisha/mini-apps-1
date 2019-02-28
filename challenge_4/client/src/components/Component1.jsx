import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

class Circle extends Component {

  clickCircle() {
    console.log('column------------', this.props.y);
  }

  render() {
    return (
      <div onClick = {this.clickCircle.bind(this)}>
      <div>{this.props.x}, {this.props.y}</div>
      </div>
    )
  }

}

export default Circle;