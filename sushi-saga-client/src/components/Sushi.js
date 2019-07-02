import React, { Fragment } from 'react'

state = {
    sushi: sushi,
    showSushi: true
  }

  toggleSushi = () => {
    this.setState({
      showSushi: !this.state.showSushi
    })
  }

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.toggleSushi/* Give me a callback! null */ }>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
            null
          :
            <img src={this.props.img_url/* Give me an image source! */} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
    {/* Give me a name! */ this.props.name} -
    ${/* Give me a price! */this.props.price}
      </h4>
    </div>
  )
}

export default Sushi
