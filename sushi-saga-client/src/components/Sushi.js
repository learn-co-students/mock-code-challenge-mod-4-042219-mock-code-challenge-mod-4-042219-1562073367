import React from 'react'
//import React, { Fragment } from 'react'


const Sushi = (props) => {
  console.log('sushi:', props.sushi.id);
  const name = props.sushi.name
  const price = props.sushi.price

  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.sushiClickHandler(props.sushi)}>
        {
          /* Tell me if this sushi has been eaten! */
          (props.sushi.eaten) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt={name} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
