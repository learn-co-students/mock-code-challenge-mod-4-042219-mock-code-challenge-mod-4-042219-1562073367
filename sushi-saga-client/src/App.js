import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushi: [],
    sushiEaten: [],
    moneyLeft: 100
  }

  updateSushiEaten = (eatenSushi) => {
    if(this.state.moneyLeft - eatenSushi.price >= 0){
        let newSushiEaten = [...this.state.sushiEaten, eatenSushi]
        let newBalance = this.state.moneyLeft - eatenSushi.price
        this.setState({
          sushiEaten: newSushiEaten,
          moneyLeft: newBalance
        })
    }
  }

  addMoneyToBalance = (addedMoney) => {
    let newBalance = this.state.moneyLeft + parseInt(addedMoney)
    this.setState({
      moneyLeft: newBalance
    })
  }

  

  componentDidMount = () =>{
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushiEaten={this.state.sushiEaten} updateSushiEaten={this.updateSushiEaten} sushi={this.state.sushi} />
        <Table addMoneyToBalance={this.addMoneyToBalance}moneyLeft={this.state.moneyLeft} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;