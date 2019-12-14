import React, { Component } from 'react';
import FeedbackDialog from 'react-feedback-dialog';

import logo from './logo.svg';
import './App.css';

const EMAIL_SMTP_HOST = '';
const EMAIL_TO = '';
const EMAIL_USER = '';
const EMAIL_PASSWORD = '';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FeedbackDialog
          config={{
            EMAIL_SMTP_HOST,
            EMAIL_TO,
            EMAIL_USER,
            EMAIL_PASSWORD
          }}
        />
      </div>
    );
  }
}

export default App;
