import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  state = {
    sushiCollection: [],
    startingNum: 0,
    endingNum: 4,
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis').then(r => r.json()).then(data => this.setState({
      sushiCollection: data,
    }))
  }

  // handleClick = (sushiObject, e) => {
  //   e.persist()
  //   console.log(sushiObject, e)
  //   sushiObject.eatten = true;
  // }

  incrementStartNum = () => {
    this.setState((prevState) => {
      return {
        startingNum: prevState.startingNum + 4,
        endingNum: prevState.endingNum + 4
      }
    })
  }

  renderFour = () => {
    // console.log(this.state.startingNum, this.state.startingNum + 4) ???
    return this.state.sushiCollection.slice(this.state.startingNum, this.state.endingNum).map(sushiObject => {
      return <Sushi sushiObject={sushiObject} key={sushiObject.name} sushiEatten={this.props.sushiEatten}/>
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderFour()
          }
          <MoreButton incrementStartNum={this.incrementStartNum} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer