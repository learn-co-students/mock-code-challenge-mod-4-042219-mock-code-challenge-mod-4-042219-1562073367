import React, { Fragment } from 'react'

class Sushi extends React.Component {


  state = {
    isEaten: false
  }

  toggleEaten = () => {
    this.setState({ isEaten: true })
  }

  render(){
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.toggleEaten}>
        { 
          
          /* Tell me if this sushi has been eaten! */ 
          this.state.isEaten ?
            null
          :
            <img src={this.props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )}
}

export default Sushi