import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiCollection: []
    
  }
  
  

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiCollection => {
      this.setState({sushiCollection: sushiCollection})
      
      
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiCollection={this.state.sushiCollection} toggleEaten={this.state.toggleEaten} />
        <Table sushiCollection={this.state.sushiCollection}/>
      </div>
    )
  }
}

export default App;