console.log('hi');
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';


class Board extends React.Component {
  render() {
    return (
        <h1>Connect 4!</h1>
    )
  }
}


ReactDOM.render(<Board />,  document.getElementById("board"));