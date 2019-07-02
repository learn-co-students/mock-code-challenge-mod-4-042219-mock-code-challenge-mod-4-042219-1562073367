import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushi.map(
            sushi => 
              < Sushi 
              {...sushi}
              handleClick={props.handleClick} 
              allSushi={props.allSushi} 
              table={props.table}
              key={sushi.id} 
            />)
        }
        <MoreButton 
          allSushi={props.allSushi} 
          fourSushi={props.fourSushi}
          handleMore={props.handleMore}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer