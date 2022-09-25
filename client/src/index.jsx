import React from 'react';
import ReactDOM from 'react-dom/client';
import StepsPartOne from './components/stepsPartOne.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickPullOverPartOneBtn: false,
      clickPullOverBtn: false,
      clickCallLawyer: false,
    }
    this.handlePullOverPartOneBtn = this.handlePullOverPartOneBtn.bind(this);
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

  handlePullOverPartOneBtn() {
    this.setState({clickPullOverPartOneBtn: true, clickPullOverBtn: false}, () => {
      console.log('clicked PullOver part one next button: ', this.state.clickPullOverPartOneBtn)
    })
  }


  render () {
    return (
      <div className="app" >
        <h1 className="title">🚓 CIVILIAN 🚓</h1>
        {/* <button>Sign In</button>
        <br></br><button>Use As Guest</button><br></br> */}
        <br></br>{this.state.clickPullOverBtn
          ? < StepsPartOne
              handleCallLawyer={this.handleCallLawyer}
              clickCallLawyer={this.state.clickCallLawyer}
              handleNext={this.handlePullOverPartOneBtn}
              clickNext={this.state.clickPullOverPartOneBtn}
            />
          : <button className="pullOverBtn" onClick={this.handlePullOverBtn}>I GOT PULLED OVER !!!</button>
        }
        <div id="background"></div>
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);

