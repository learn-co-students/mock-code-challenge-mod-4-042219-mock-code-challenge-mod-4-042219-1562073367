import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  state = {
    allSushi: [],
    sushiBelt: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
      .then(res => res.json())
      .then(data => this.setState({
        allSushi: data,
        sushiBelt: data
      })
    )
  }

  renderFourSushi = () => {
    return this.state.sushiBelt.slice(0, 4)
  }

  createSushi = () => {
    return this.renderFourSushi().map(sushi => <Sushi budget={this.props.budget} handleBudget={this.props.handleBudget} handleAddingPlates={this.props.handleAddingPlates} key={sushi.id} {...sushi} />)
  }

  handleMoreButton = () => {
    if (this.state.sushiBelt.length > 4){
    this.setState({
      sushiBelt: this.state.sushiBelt.slice(4)
      })
    } else {
      this.setState({
        sushiBelt: this.state.allSushi
      })
    }
  }


render(){ 
  console.log(this.state.sushiBelt.slice(4))
  return (
    <Fragment>
      <div className="belt">
        {
          this.createSushi()
        }
        <MoreButton handleMoreButton={this.handleMoreButton} />
      </div>
    </Fragment>
  )
}
}

export default SushiContainer