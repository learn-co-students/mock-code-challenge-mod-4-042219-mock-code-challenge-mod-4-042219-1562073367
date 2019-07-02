import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiGroup = props.sushi.slice(0, 4)
  return (
    <Fragment>
      <div className="belt">
        {sushiGroup.map(sush => {
          return <Sushi key={sush.id} {...sush} eatSushi={props.eatSushi}/>
        })}
        <MoreButton handleClick={props.handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
