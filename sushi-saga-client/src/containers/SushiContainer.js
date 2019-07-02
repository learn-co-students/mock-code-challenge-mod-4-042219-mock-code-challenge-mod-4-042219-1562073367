import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state={
    currentIndex: 0
  }

  updateIndex = () => {
    let prevState = this.state.currentIndex
    
    let newIndex = prevState + 4
    this.setState({
      currentIndex: newIndex
    })
  }

  nextSushi = () => {
   return this.props.sushi.slice(this.state.currentIndex, this.state.currentIndex + 4)

  }
render(){
  console.log("SUSHI CONTAINER", this.props)
      return (
        <Fragment>
          <div className="belt">
            {
              this.nextSushi().map(sush => <Sushi sushiEaten={this.props.sushiEaten} updateSushiEaten={this.props.updateSushiEaten} {...sush}/>)
            }
            <MoreButton updateIndex={this.updateIndex}/>
          </div>
        </Fragment>
      )
  }
}

export default SushiContainer