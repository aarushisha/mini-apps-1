
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
      cvv: '',
      billingZipCode: '',
    };   
  }

  nextStepForm1(event){
    event.preventDefault();
    this.setState ({
        step: 2,
    })
    fetch('/form1', {
      method: 'GET',
    })
  }

  nextStepForm2(event){
    event.preventDefault();
    this.setState ({
        step: 3,
    })
    fetch('/form2', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }),
    }).catch(function(err) {
      console.log(err);
    })
  }

  nextStepForm3(event){
    event.preventDefault();
    this.setState ({
        step: 4,
    })
    fetch('/form3', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( {
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phone: this.state.phone
      })
    }).catch(function(err) {
      console.log(err);
    }) 
  }

  nextStepConfirm(event){
    event.preventDefault();
    this.setState ({
        step: 5,
    })
  }

  nextStepBackHome(event){
    event.preventDefault();
    this.setState ({
        step: 1,
    })
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }



  render() {
    if (this.state.step === 1) {
        return (
          <div>
            <h1>Click below to check out!</h1>
             <button id="checkout" onClick={this.nextStepForm1.bind(this)}>Check Out</button>
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
            <input type="submit" value="Next" onClick={this.nextStepForm2.bind(this)}></input>
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
        <input type="submit" value="Next" onClick={this.nextStepForm3.bind(this)}></input>
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
      <input type="submit" value="Next" onClick={this.nextStepConfirm.bind(this)}></input>
    </form>
  </div>
  ); 
}
if (this.state.step === 5) {
  return (
    <div>
    <h1>Confirm Information</h1>
    <p>Name: {this.state.name}</p>
    <p>Email: {this.state.email}</p>
    <p>Password: {this.state.password}</p>
    <p>Address Line 1: {this.state.address1}</p>
    <p>Address Line 2: {this.state.address2}</p>
    <p>City: {this.state.city}</p>
    <p>State: {this.state.state}</p>
    <p>Zip Code: {this.state.zipCode}</p>
    <p>Phone Number: {this.state.phone}</p>
    <p>Credit Card Number: {this.state.cc}</p>
    <p>Expiration Date: {this.state.exp}</p>
    <p>CVV: {this.state.cvv}</p>
    <p>Billing Zip Code: {this.state.billingZipCode}</p>

    <button onClick={this.nextStepBackHome.bind(this)}>Purchase</button>
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