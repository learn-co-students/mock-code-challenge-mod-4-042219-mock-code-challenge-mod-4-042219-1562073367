import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    data: [],
    eatedSushi: [],
    selectedSush: {},
    showItemsStart: 0,
    showItemsEnd: 4,
    eatedSushiPrice: 0
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  eatSush = (props) => {
    this.setState({
      eatedSushi: [...this.state.eatedSushi, props.sushi],
      selectedSush: props
    })
    this.determineBudget()
  }

  moreButtonHandler = () => {
    this.setState({
      showItemsStart: this.state.showItemsStart + 4,
      showItemsEnd: this.state.showItemsEnd + 4
    })
  }

  determineBudget = () => {
    var a = this.state.eatedSushi,
        total = 0;
    for (var i=0; i<a.length; i++) {
        total += a[i].price;
    }
    this.setState({eatedSushiPrice: total})
  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer state={this.state} eatSush={this.eatSush} moreButtonHandler={this.moreButtonHandler}/>
        <Table eatedSushi={this.state.eatedSushi} state={this.state}/>
      </div>
    );
  }
}

export default App;