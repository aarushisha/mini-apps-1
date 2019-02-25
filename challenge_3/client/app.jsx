
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };   
  }

  nextStep(){
    if (this.state.step !== 5) {
      this.setState ({
        step: this.state.step + 1,
      })
    } else {
      this.setState ({
        step: this.state.step = 1,
      })
    }
  }




  render() {
    if (this.state.step === 1) {
        return (
          <div>
            <h1>Click below to check out!</h1>
             <button id="checkout" onClick={this.nextStep.bind(this)}>Check Out</button>
          </div>
        ); 
    }
    if (this.state.step === 2) {
      return (
        <div>
          <h1>Form 1</h1>
           <button id="checkout" onClick={this.nextStep.bind(this)}>Next</button>
        </div>
      ); 
  }
  if (this.state.step === 3) {
    return (
      <div>
        <h1>Form 2</h1>
         <button id="checkout" onClick={this.nextStep.bind(this)}>Next</button>
      </div>
    ); 
}
if (this.state.step === 4) {
  return (
    <div>
      <h1>Form 3</h1>
       <button id="checkout" onClick={this.nextStep.bind(this)}>Next</button>
    </div>
  ); 
}
if (this.state.step === 5) {
  return (
    <div>
      <h1>Confirmation</h1>
       <button id="checkout" onClick={this.nextStep.bind(this)}>Purchase</button>
    </div>
  ); 
}
    }
  }


ReactDOM.render(<App />,  document.getElementById('home'));

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Click below to check out!</h1>
        <button id="next1" onClick={this.nextStep}>Check out</button>
      </div>

    ); 
  }
}


// class Form1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Click below to check out!</h1>
//         <button id="next1">Next</button>
//       </div>

//     ); 
//   }
// }

// class Form2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Click below to check out!</h1>
//         <button id="next2">Next</button>
//       </div>

//     ); 
//   }
// }

// class Form3 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Click below to check out!</h1>
//         <button id="next3">Next</button>
//       </div>

//     ); 
//   }
// }

// class Confirmation extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Click below to check out!</h1>
//         <button id="purchase">Purchase</button>
//       </div>

//     ); 
//   }
// }