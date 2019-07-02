import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    fourSushi: [],
    table: []
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi() {
    fetch('http://localhost:3000/sushis')
    .then(res=>res.json())
    .then(data => {
      this.setState({
        allSushi: data,
        fourSushi: [...data].splice(0,4),
        table: [...data].splice(0,2) //just to test
      })
    })
  }

  handleClick(table, sushiObj) {
    /*can't set state in Sushi.js, need to use hooks, tried changing to class but was not working well

    GOAL: upon click, add sushi prop to table in a set state to call a rerender
    - adds a plate to the table
    - changes the condition and shows an empty plate on belt

      this.setState({
        table:[...table, sushiObj]
      })
    */
    console.log('clicked sushi:', sushiObj)
    console.log('table before:', table)
    this.setState({
      table: [...table, sushiObj]
    })
  }

  handleMore(props) {
    console.log('clicked', props.allSushi)
    this.setState({
      fourSushi: [...props.allSushi.splice(0,4)],
      allSushi: [...props.allSushi]
    })
  }

  render() {
    console.log('table after:', this.state.table)
    return (
      <div className="app">
        <SushiContainer 
          allSushi={this.state.allSushi} 
          fourSushi={this.state.fourSushi} 
          handleClick={this.handleClick} 
          handleMore={this.handleMore} 
          table={this.state.table}
        />
        <Table 
          table={this.state.table}
        />
      </div>
    );
  }
}

export default App;