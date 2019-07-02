import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import MoreMoney from '../components/MoreMoney'

class SushiContainer extends Component {

  state = {
    start: 0,
    end: 4
  }

  fourSushi = () => {
    return this.props.sushi.slice(this.state.start, this.state.end)
  }

  nextFour = () => {
    this.setState({
      start: this.state.start + 4,
      end: this.state.end + 4
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.fourSushi().map(sushi => 
            <Sushi 
              {...sushi} 
              subtractMoney={this.props.subtractMoney} 
              increaseEatenCount={this.props.increaseEatenCount}
            />
          )}
          <MoreButton nextFour={this.nextFour}/>
          <MoreMoney addMoney={this.props.addMoney}/>
        </div>
      </Fragment>
    )
  }
  
}

export default SushiContainer