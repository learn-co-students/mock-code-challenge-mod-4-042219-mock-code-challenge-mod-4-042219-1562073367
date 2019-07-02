import React, { Fragment } from 'react'

class Table extends React.Component{

  state={
    addedMoney: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoneyToBalance(this.state.addedMoney)
    this.setState({
      addedMoney: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render(){
  return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.moneyLeft} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                renderPlates takes an array 
                and renders an empty plate
                for every element in the array
              */
              this.renderPlates(this.props.sushiEaten)
            }
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Add Money To Your Balance
          </p>
          <input onChange={this.handleChange} value={this.state.addedMoney} name="addedMoney"/>
        </form>
      </Fragment>
    )
   }
}

export default Table