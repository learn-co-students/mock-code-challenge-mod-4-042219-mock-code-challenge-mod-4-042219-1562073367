import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

    state = {
      data: [],
      nom: false
    };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(incdata => {
        // this.setState((prevState, props) => {
        //   return {data: incdata};
        // })
        this.setState({
          data: incdata
        })
        // console.log("within fetch", incdata);
      });
    }
    //handleClick for clicking on a sushi
    handleSushiClick = () => {
      //when i click a sushi i want to empty the plate (nomnom) --
      //must also charge the $$price

      // this.setState({
      //  nom: true
      // })
    }

    //handleClick for clicking on the moreSushi button here?
    
  render() {
    // console.log("app data", this.state.data);
    return (
      <div className="app">
        <SushiContainer data={this.state.data} onClick={this.handleSushiClick} />
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
