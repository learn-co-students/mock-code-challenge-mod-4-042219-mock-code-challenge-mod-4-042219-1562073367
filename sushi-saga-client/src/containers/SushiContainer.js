import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushiCollection)
  return (

    
    <Fragment>
      <div className="belt">
        {
          props.sushiCollection.slice(0,4).map(sushi => {
            return <Sushi key={sushi.id} {...sushi} toggleEaten={props.toggleEaten} />
          })
        }
        <MoreButton sushiCollection={props.sushiCollection}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer