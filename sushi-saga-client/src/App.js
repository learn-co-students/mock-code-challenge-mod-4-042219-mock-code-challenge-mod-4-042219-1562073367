import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    data: [],
    eatedSushi: [],
    showItems: 4
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  eatSush = (props) => {
    this.setState({
      eatedSushi: [...this.state.eatedSushi, props.sushi]
    })
    // console.log("Heyo")
    // debugger
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer state={this.state} eatSush={this.eatSush} />
        <Table />
      </div>
    );
  }
}

export default App;