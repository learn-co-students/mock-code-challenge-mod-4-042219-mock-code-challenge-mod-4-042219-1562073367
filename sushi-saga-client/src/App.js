import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  state = {
    allSushis:[],
    list:1,
    eaten:[]
  }

  handlelist = ()=>{
    this.setState({
      list: this.state.list+1
    })
  }

  handleeaten= (sushi) =>{
    debugger
    this.setState({
      eaten: [...this.state.eaten]
    })
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(data =>{
      this.setState({
        allSushis: data
      })
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} handleeaten={this.handleeaten} handlelist={this.handlelist} list={this.state.list} allSushis={this.state.allSushis} />
        <Table />
      </div>
    );
  }
}

export default App;
