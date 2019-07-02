import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: false,
    wallet: 100
  }

  fetchSushi() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushi: data
          })
          console.log(data)
        })
  }

  componentDidMount() {
    this.fetchSushi()
  }

  eatSushi = () => {
    this.setState({
      eaten: !this.state.eaten
    })
    console.log('yum')
  }

  // handleClick = () => {
  //   this.setState({
  //     eaten: !this.state.eaten
  //   })
  //   console.log('click')
  // }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi}/>
        <Table sushi={this.state.sushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
