import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Button, Card } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { output: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Button clicked.');
  }


  render() {
    return (
      <div className="App">
        <Card className="App-Card" title="Output">
          <p>{this.state.output}</p>
        </Card>
        <Button className="App-Button" type="primary" onClick={this.handleClick}>Calculate</Button>
      </div>
    );
  }
}

export default App;
