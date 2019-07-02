import React, { Fragment } from 'react'

class Sushi extends React.Component {
  

  updateToEaten = () =>{
    
    this.props.updateSushiEaten(this.props)
  }
  render(){
    console.log(this.props)
     return( 
      <div className="sushi">
        <div className="plate" 
            onClick={this.updateToEaten}>
          { 
            this.props.sushiEaten.find(sushi => sushi.id === this.props.id)
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