import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  handleClick = () => {
    if (this.props.budget > 0){
    this.setState({
      eaten: true
      })
  }
  }

  render(){
    console.log(typeof this.props.price)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {
            this.handleClick()
            this.props.handleAddingPlates()
            this.props.handleBudget(this.props.price)

          }}
           >
        { 
          this.state.eaten/* Tell me if this sushi has been eaten! */ 
           ?
            null
          :
            <img src={this.props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )
}
}

export default Sushi