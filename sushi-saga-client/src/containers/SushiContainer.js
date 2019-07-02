import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //console.log('sushicontainer:', props);

  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushi.map(sushi => {
            return <Sushi key={Math.round(Math.random() * 1000000)} sushi={sushi} sushiClickHandler={props.sushiClickHandler} />
          })
        }
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
