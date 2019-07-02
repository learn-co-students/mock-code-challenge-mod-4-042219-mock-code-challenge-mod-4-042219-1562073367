import React, { Component } from 'react';

class Sushi extends Component {

  state = {
    eaten: false
  }

  handleSushiClick = () => {
    if (this.state.eaten) {
      return null
    } else {
      this.props.subtractMoney(this.props.price)
      this.props.increaseEatenCount()
      this.setState({
        eaten: true
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleSushiClick}>
          {  
            this.state.eaten ?
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