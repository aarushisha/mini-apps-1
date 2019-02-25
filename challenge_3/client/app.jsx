
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };   
  }

  nextStep(event){
    event.preventDefault();
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
          <h1>Enter User Information</h1>
          <form>
            Name   <input type="text" id="name"></input>
            <br></br>
            Email   <input type="text" id="email"></input>
            <br></br>
            Password   <input type="text" id="password"></input>
            <br></br>
            <input type="submit" value="Next" onClick={this.nextStep.bind(this)}></input>
          </form>
        </div>
      ); 
  }
  if (this.state.step === 3) {
    return (
      <div>
      <h1>Enter Shipping Information</h1>
      <form>
        Address Line 1   <input type="text" id="line1" size="20"></input>
        <br></br>
        Address Line 2   <input type="text" id="line2" size="20"></input>
        <br></br>
        City   <input type="text" id="city"></input>
        State  <input type="text" id="st" maxLength="2" size="2"></input>
        Zip Code  <input type="text" id="zipcode" maxLength="5" size="5"></input>
        <br></br>
        Phone Number  <input type="text" id="phone" maxLength="10" size="10"></input>
        <br></br>
        <input type="submit" value="Next" onClick={this.nextStep.bind(this)}></input>
      </form>
    </div>
    ); 
}
if (this.state.step === 4) {
  return (
    <div>
    <h1>Enter Billing Information</h1>
    <form>
      Credit Card Number   <input type="text" id="ccnumber" maxLength="20" size="20"></input>
      <br></br>
      Expiration Date   <input type="text" id="expiration" maxLength="4" size="4"></input>
      CVV   <input type="text" id="cvv"></input>
      <br></br>
      Billing Zip Code <input type="text" id="billingzip" maxLength="5" size="5"></input>
      <br></br>
      <input type="submit" value="Next" onClick={this.nextStep.bind(this)}></input>
    </form>
  </div>
  ); 
}
if (this.state.step === 5) {
  return (
    <div>
    <h1>Confirm Information</h1>
    <button onClick={this.nextStep.bind(this)}>Purchase</button>

  </div>
  ); 
}
    }
  }


ReactDOM.render(<App />,  document.getElementById('home'));

// class HomePage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Click below to check out!</h1>
//         <button id="next1" onClick={this.nextStep}>Check out</button>
//       </div>

//     ); 
//   }
// }


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