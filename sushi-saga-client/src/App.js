import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    money: 200,
    start: 0,
    end: 4
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(allSushi => {
      let added = allSushi.map(sushi => ({...sushi, eaten: false}))

      this.setState({
        sushi: added
      })
    })
  }

  handleSushi = (sushi) => {
    //if not eaten
    if (!sushi.eaten && (this.state.money - sushi.price > 0)) {
      let newSushi = {...sushi, eaten: true}
      let updatedSushi = this.state.sushi.map(s => {
        if (s.id === newSushi.id)
          return newSushi
        else
          return s
      })

      this.setState({
        sushi: updatedSushi,
        money: this.state.money - newSushi.price
      })
    }
  }

  showMoreSushi = () => {
    // if we're at the end of line let's start over!
    if (this.state.end >= this.state.sushi.length) {
      this.setState({
        start: 0,
        end: 4
      })
    } else {
      this.setState({
        start: this.state.start + 4,
        end: this.state.end + 4
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} money={this.state.money} handleSushi={this.handleSushi} showMoreSushi={this.showMoreSushi} start={this.state.start} end={this.state.end} />
        <Table sushi={this.state.sushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;