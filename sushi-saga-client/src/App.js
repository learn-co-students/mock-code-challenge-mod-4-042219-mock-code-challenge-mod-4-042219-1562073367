import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiList: [],
    startingIndex: 0,
    wallet: 100,
    sushiEaten: [],
    walletInput: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushiList: sushi
      })
    })
  }

  moreButtonHandler = () => {
    this.setState({
      startingIndex: this.state.startingIndex === 96 ? 0 : this.state.startingIndex + 4
    })
  }

  sushiClickHandler = (sushi) => {
    let name = sushi.name
    let price = sushi.price
    sushi.eaten = true

    if (this.state.wallet >= price) {
      this.setState({
        sushiEaten: [...this.state.sushiEaten, name],
        wallet: this.state.wallet - price,
        sushiList: this.state.sushiList.map(orig => {
          if (orig.id === sushi.id) {
            return sushi
          } else {
            return orig
          }
        })
      })
    }
  }

  walletChange = (event) => {
    this.setState({
      walletInput: event.target.value
    })
  }

  walletSubmit = (event) => {
    event.preventDefault()
    this.setState({
      wallet: this.state.wallet + (parseInt(this.state.walletInput, 10))
    })
  }

  render() {
    //console.log('state:', this.state)
    console.log(this.state.walletInput)
    let currentSushi = this.state.sushiList.slice(this.state.startingIndex, this.state.startingIndex + 4)

    return (
      <div className="app">
        <SushiContainer currentSushi={currentSushi} moreButtonHandler={this.moreButtonHandler} sushiClickHandler={this.sushiClickHandler} />
        <Table wallet={this.state.wallet} sushiEaten={this.state.sushiEaten} walletSubmit={this.walletSubmit} walletChange={this.walletChange}/>
      </div>
    );
  }
}

export default App;
