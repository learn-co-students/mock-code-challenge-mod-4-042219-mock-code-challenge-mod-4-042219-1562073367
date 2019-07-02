import React, { Fragment } from 'react'

const Table = (props) => {
  //console.log('table:', props);

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={Math.round(Math.random() * 1000000)} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushiEaten)
          }
        </div>

        <div className="sushiWallet">
          <form onSubmit={props.walletSubmit} onChange={props.walletChange}>
            $ <input type="number" name="money" placeholder="0" value={props.walletInput}/>
            {
            <input type="submit" value="add money to wallet" />
            }
          </form>
        </div>

      </div>
    </Fragment>
  )
}

export default Table
