import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const uneatenSushi = () => {
    let sushiCards = props.sushi.map(s => <Sushi key={s.id} {...s} handleSushi={props.handleSushi}/>)
    return sushiCards.slice(props.start, props.end)
  }

  return (
    <Fragment>
      <div className="belt">
        {uneatenSushi()}
        <MoreButton showMoreSushi={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer