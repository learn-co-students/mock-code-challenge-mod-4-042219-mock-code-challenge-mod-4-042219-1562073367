import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          this.props.sushi.map(sushi => {
            return <Sushi key={sushi.name} {...sushi} />
            })
          /*
             Render Sushi components here!

          */
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
