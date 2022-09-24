import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {}

  render () {
    return (
      <div>
        <h1>OMG!</h1>
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);

