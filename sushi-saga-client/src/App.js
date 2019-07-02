import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet'


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

	state = {
		array: [],
		currentBudget: 100,
		addingWallet: 0
	}

handleAddingPlates = () => {
	this.setState({
	  array: [...this.state.array, 1]
	})
}

handleRemovingPlates = () => {
	this.setState({
		array: []
	})
}

handleBudget = (sushiPrice) => {
	this.setState({
		currentBudget: parseInt(this.state.currentBudget) - parseInt(sushiPrice)
		})
}

handleWalletSubmit = (money) => {

	this.setState({
		currentBudget: parseInt(this.state.currentBudget) + parseInt(this.state.addingWallet)
	})
}

handleWalletChange = (e) =>{
	this.setState({
		addingWallet: e.target.value
	})
}

  render() {
    return (
      <div className="app">
        <SushiContainer budget={this.state.currentBudget} handleBudget={this.handleBudget} handleRemovingPlates={this.handleRemovingPlates} handleAddingPlates={this.handleAddingPlates}/>
        <Table budget={this.state.currentBudget} plates={this.state.array}/>
        <SushiWallet handleWalletChange={this.handleWalletChange} handleWalletSubmit={this.handleWalletSubmit}/>
      </div>
    );
  }
}

export default App;