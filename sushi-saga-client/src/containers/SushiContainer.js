import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log("sushi container", props);
  return (
    <Fragment>
      <div className="belt">
      {
        // debugger;
        props.data.map(sushi => {
          return <Sushi key={sushi.id} {...sushi} onClick={this.handleSushiClick} />
          })
          // debugger;
      }

        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
