import React from 'react';
import FeedbackDialog from 'react-feedback-dialog';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.toggleFeedbackDialog = this.toggleFeedbackDialog.bind(this);
  }

  toggleFeedbackDialog() {
    console.log('hello');
    this.setState((prevState, props) => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <button onClick={this.toggleFeedbackDialog}>Give Feedback</button>
            <FeedbackDialog
              active={this.state.active}
              onClose={() => this.toggleFeedbackDialog()}
              text="Primary"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
