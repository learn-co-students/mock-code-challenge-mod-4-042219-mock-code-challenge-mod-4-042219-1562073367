import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(0,4).map(sushi => {
            return <Sushi key={sushi.id} {...sushi} />
          })
        }
        <MoreButton moresSushi = {props.sushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
