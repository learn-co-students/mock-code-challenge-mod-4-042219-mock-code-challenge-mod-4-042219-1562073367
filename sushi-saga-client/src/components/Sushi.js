import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eatten: false,
  }

  handleClick = () => {
    console.log(this)
    if (!this.state.eatten) {
      this.props.sushiEatten(this.props.sushiObject);
    }
    this.setState({
      eatten: true,
    })
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClick}>
          {this.state.eatten ? null : <img src={this.props.sushiObject.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObject.name} - ${this.props.sushiObject.price}
        </h4>
      </div>
    )
  }
}

export default Sushi