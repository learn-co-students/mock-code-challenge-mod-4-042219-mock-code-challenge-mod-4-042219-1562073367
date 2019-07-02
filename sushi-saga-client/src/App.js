import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenCount: [],
    money: 100
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
      .then(res => res.json())
      .then(data => this.setState({sushi: data}))
  }

  subtractMoney = (sushiPrice) => {
    if(sushiPrice > this.state.money) {
      return null
    } else {
      this.setState({
        money: this.state.money - sushiPrice
      })
    }
  }

  addMoney = (event, addValue) => {
    event.preventDefault()
    console.log(addValue)
    this.setState({
      money: addValue
    })
  }

  increaseEatenCount = () => {
    const newCount = this.state.eatenCount
    newCount.push(1)
    this.setState({
      eatenCount: newCount
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi}
          subtractMoney={this.subtractMoney}
          increaseEatenCount={this.increaseEatenCount}
          addMoney={this.addMoney}
        />
        <Table 
          money={this.state.money}
          eatenCount={this.state.eatenCount}
        />
      </div>
    );
  }
}

export default App;