import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
        sushi: null,
      };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushi => this.setState({ sushi: sushi }));
      console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.sushi}  />
        <Table sushi={this.sushi} />
      </div>
    );
  }
}

export default App;
