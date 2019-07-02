import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

	state = {
		array: [],
		currentBudget: 100
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

  render() {
    return (
      <div className="app">
        <SushiContainer budget={this.state.currentBudget} handleBudget={this.handleBudget} handleRemovingPlates={this.handleRemovingPlates} handleAddingPlates={this.handleAddingPlates}/>
        <Table budget={this.state.currentBudget} plates={this.state.array}/>
      </div>
    );
  }
}

export default App;