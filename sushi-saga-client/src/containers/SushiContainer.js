import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// const items = props.state.data.slice((0, props.state.showItems).map((sushi) => {
//   return <Sushi sushi={sushi} />
// }

const SushiContainer = (props) => {
  // console.log(props.state.data)
  return (
    <Fragment>
      <div className="belt">
          {
            props.state.data.slice(props.state.showItemsStart, props.state.showItemsEnd).map((sushi) => {
                return <Sushi sushi={sushi} key={sushi.id} eatSush={props.eatSush} state={props.state}/>})
          }

        
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer