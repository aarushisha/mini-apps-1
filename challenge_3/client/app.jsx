
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      cc: '',
      exp: '',
      ccv: '',
      billingZipCode: '',
    };   
  }

  saveUserInformation(event) {
    event.preventDefault();
    this.setState({
      name: event.target.name,
      email: event.target.email,
      password: event.target.password
    })
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

  onInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
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
            Name   <input type="text" id="name" name="name" value={this.state.name} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
            Email   <input type="text" id="email" value={this.state.email} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
            Password   <input type="password" id="password" value={this.state.password} onChange={this.onInputChange.bind(this)}></input>
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
        Address Line 1   <input type="text" id="address1" size="20" value={this.state.address1} onChange={this.onInputChange.bind(this)}></input>
        <br></br>
        Address Line 2   <input type="text" id="address2" size="20" value={this.state.address2} onChange={this.onInputChange.bind(this)}></input>
        <br></br>
        City   <input type="text" id="city" value={this.state.city} onChange={this.onInputChange.bind(this)}></input>
        State  <input type="text" id="state" maxLength="2" size="2" value={this.state.state} onChange={this.onInputChange.bind(this)}></input>
        Zip Code  <input type="text" id="zipCode" maxLength="5" size="5" value={this.state.zipCode} onChange={this.onInputChange.bind(this)}></input>
        <br></br>
        Phone Number  <input type="text" id="phone" maxLength="10" size="10" value={this.state.phone} onChange={this.onInputChange.bind(this)}></input>
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
      Credit Card Number   <input type="text" id="cc" maxLength="20" size="20" value={this.state.cc} onChange={this.onInputChange.bind(this)}></input>
      <br></br>
      Expiration Date   <input type="text" id="exp" maxLength="4" size="4" value={this.state.exp} onChange={this.onInputChange.bind(this)}></input>
      CVV   <input type="text" id="cvv" value={this.state.cvv} onChange={this.onInputChange.bind(this)}></input>
      <br></br>
      Billing Zip Code <input type="text" id="billingZipCode" maxLength="5" size="5" value={this.state.billingZipCode} onChange={this.onInputChange.bind(this)}></input>
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