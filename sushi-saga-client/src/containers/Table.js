import React, { Fragment } from 'react'

class Table extends React.Component {

  
  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  

  render(){
    console.log(this.props.plates)
  return (
    <Fragment>
      <h1 className="remaining">
        {this.props.budget >= 0 ? `You have: ${ this.props.budget } remaining!` : "You are out of money!"}
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            this.props.budget > 0 ? this.renderPlates(this.props.plates) : null
          }
        </div>
      </div>
    </Fragment>
  )
}
}

export default Table