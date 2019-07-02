import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const budget = 100;
  const spent = (arrSushiObj) => {
    let counter = 0;
    for(let i = 0; i < arrSushiObj.length; i++) {
      counter += i.price
    }
    return counter
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ budget - spent(props.table) } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.table)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table