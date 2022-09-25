import React from 'react';
import ReactDOM from 'react-dom/client';
import StepsPartOne from './components/stepsPartOne.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickPullOverBtn: false,
      clickCallLawyer: false,
    }
    this.handlePullOverBtn = this.handlePullOverBtn.bind(this);
    this.handleCallLawyer = this.handleCallLawyer.bind(this);
  }

  componentDidMount () {
  }

  handlePullOverBtn() {
    this.setState({clickPullOverBtn: true}, () => {
      console.log('clicked PullOver button: ', this.state.clickPullOverBtn)
    })
  }

  handleCallLawyer() {
    this.setState({clickCallLawyer: true}, () => {
      console.log('clicked CallLawyer button: ', this.state.clickCallLawyer)
    })
  }


  render () {
    return (
      <div>
        <h1>🚓 CIVILIAN SOS 🚓</h1>
        {/* <button>Sign In</button>
        <br></br><button>Use As Guest</button><br></br> */}
        <br></br>{this.state.clickPullOverBtn
          ? < StepsPartOne
              handleCallLawyer={this.handleCallLawyer}
              clickCallLawyer={this.state.clickCallLawyer}
            />
          : <button onClick={this.handlePullOverBtn}>I GOT PULLED OVER !!!</button>
        }
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);

