import React from 'react';
import CallLawyer from './CallLawyer.jsx';

class StepsPartOne extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1 className="recordHeader"> RECORDING... </h1>
        <div>
          <h3>1. Stay in your car </h3>
          <h3>2. Keep hands on the steering wheel </h3>
          <h3>3. Turn on the interior light if it is dark</h3>
          <h3>4. Place the phone in a good spot to film</h3>
          <h3>5. Politely ask police the pulledover reason</h3>
          <h3>6. Provide the documentations required by law</h3>
          <h3>7. Politely refuse police anything not related</h3>
          {this.props.clickCallLawyer
            ? < CallLawyer />
            : <button className="callLawyerBtn" onClick={this.props.handleCallLawyer}>CALL MY LAWYER</button>
          }
          <br></br>
          <button className="findLawyerBtn">FIND MY LAWYER</button>
          <br></br>
        </div>
      </div>
    );
  }
}

export default StepsPartOne;