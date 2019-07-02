import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    wallet: 100,
    bill: 0,
    eatten: []
  }

  sushiEatten = (sushiObject) => {
    const updated = this.state.eatten.push(sushiObject)
    this.setState((prevState) => {
      return {
        bill: prevState.bill + sushiObject.price,
        eatten: prevState.eatten
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiEatten={this.sushiEatten} {...this.state}/>
        <Table bill={this.state.bill} eatten={this.state.eatten} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;