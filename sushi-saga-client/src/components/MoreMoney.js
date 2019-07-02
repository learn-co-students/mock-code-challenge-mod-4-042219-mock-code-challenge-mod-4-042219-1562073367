import React, { Component } from 'react';

class MoreMoney extends Component {

  state = {
    addValue: 0
  }

  handleChange= (event) => {
    this.setState({
      addValue: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="add-form">
        <form onSubmit={()=>this.props.addMoney(this.state.addValue)}>
          <input onChange={this.handleChange} name="funds" value={this.state.addValue}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }  
}

export default MoreMoney