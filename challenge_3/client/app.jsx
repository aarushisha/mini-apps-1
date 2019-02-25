class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Click below to check out!</h1>
        <button id="checkout">Check Out</button>
      </div>

    ); 
  }
}

ReactDOM.render(<HomePage />,  document.getElementById('home'));