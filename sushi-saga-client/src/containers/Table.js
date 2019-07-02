import React, { Fragment } from 'react'
import MoneyForm from '../components/MoneyForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const eatenSushi = () => props.sushi.filter(s => s.eaten)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
        <MoneyForm handleMoney={props.handleMoney}/>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            
            renderPlates(eatenSushi())
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table