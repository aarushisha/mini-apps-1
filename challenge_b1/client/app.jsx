class Board extends React.Component {
  render() {
    return (
      <div>
        <h1>CHECKERS!</h1>
        <div className="board">
        <div className="row0">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>
        </div>
        <div className="row1">
        <div id="10"></div>
        <div id="11"></div>
        <div id="12"></div>
        <div id="13"></div>
        <div id="14"></div>
        <div id="15"></div>
        <div id="16"></div>
        <div id="17"></div> 
        </div>
        <div className="row2">
        <div id="20"></div>
        <div id="21"></div>
        <div id="22"></div>
        <div id="23"></div>
        <div id="24"></div>
        <div id="25"></div>
        <div id="26"></div>
        <div id="27"></div>      
        </div>
        <div className="row3">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>
        </div>
        <div className="row4">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>  
        </div>
        <div className="row5">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>
        </div>
        <div className="row6">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>
        </div>
        <div className="row7">
        <div id="00"></div>
        <div id="01"></div>
        <div id="02"></div>
        <div id="03"></div>
        <div id="04"></div>
        <div id="05"></div>
        <div id="06"></div>
        <div id="07"></div>
        </div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Board />, document.getElementById('checkers'));