import React, { Fragment } from 'react'

const Table = (props) => {
  console.log(props)
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ (100 - props.state.eatedSushiPrice) } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatedSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table