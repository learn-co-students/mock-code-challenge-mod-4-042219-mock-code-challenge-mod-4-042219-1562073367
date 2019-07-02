import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  
  state = {
    sushi: []
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ sushi: data }));
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

export default App;