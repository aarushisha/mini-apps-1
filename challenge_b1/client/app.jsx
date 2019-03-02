class Board extends React.Component {
  render() {
    return (
      <div>
        <h1>Let's Play Checkers!</h1>
        <div className="board">
        <div className="row0">
          <div className="black" id="00"></div>
          <div className="red" id="01"></div>
          <div className="black" id="02"></div>
          <div className="red" id="03"></div>
          <div className="black" id="04"></div>
          <div className="red" id="05"></div>
          <div className="black" id="06"></div>
          <div className="red" id="07"></div>
        </div>
        <div className="row1">
          <div className="red" id="10"></div>
          <div className="black" id="11"></div>
         <div className="red" id="12"></div>
         <div className="black" id="13"></div>
         <div className="red" id="14"></div>
          <div className="black" id="15"></div>
         <div className="red" id="16"></div>
         <div className="black" id="17"></div> 
        </div>
        <div className="row2">
        <div className="black" id="20"></div>
        <div className="red" id="21"></div>
        <div className="black" id="22"></div>
        <div className="red" id="23"></div>
        <div className="black" id="24"></div>
        <div className="red" id="25"></div>
        <div className="black" id="26"></div>
        <div className="red" id="27"></div> 
        </div>
        <div className="row3">
        <div className="red" id="30"></div>
        <div className="black" id="31"></div>
        <div className="red" id="32"></div>
        <div className="black" id="33"></div>
        <div className="red" id="34"></div>
        <div className="black" id="35"></div>
        <div className="red" id="36"></div>
        <div className="black" id="37"></div> 
        </div>
        <div className="row4">
        <div className="black" id="40"></div>
        <div className="red" id="41"></div>
        <div className="black" id="42"></div>
        <div className="red" id="43"></div>
        <div className="black" id="44"></div>
        <div className="red" id="45"></div>
        <div className="black" id="46"></div>
        <div className="red" id="47"></div>
        </div>
        <div className="row5">
        <div className="red" id="50"></div>
        <div className="black" id="51"></div>
        <div className="red" id="52"></div>
        <div className="black" id="53"></div>
        <div className="red" id="54"></div>
        <div className="black" id="55"></div>
        <div className="red" id="56"></div>
        <div className="black" id="57"></div> 
        </div>
        <div className="row6">
        <div className="black" id="60"></div>
        <div className="red" id="61"></div>
        <div className="black" id="62"></div>
        <div className="red" id="63"></div>
        <div className="black" id="64"></div>
        <div className="red" id="65"></div>
        <div className="black" id="66"></div>
        <div className="red" id="67"></div>
        </div>
        <div className="row7">
        <div className="red" id="70"></div>
        <div className="black" id="71"></div>
        <div className="red" id="72"></div>
        <div className="black" id="73"></div>
        <div className="red" id="74"></div>
        <div className="black" id="75"></div>
        <div className="red" id="76"></div>
        <div className="black" id="77"></div> 
        </div>
      </div>
      </div>
    )
  }

}

ReactDOM.render(<Board />, document.getElementById('checkers'));