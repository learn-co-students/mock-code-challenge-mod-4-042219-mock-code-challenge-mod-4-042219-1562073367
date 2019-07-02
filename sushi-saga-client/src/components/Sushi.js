import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleSushi(props)}>
        { 
          props.eaten ?
            null
          :
            <img src={props.img_url} width="100%" alt={props.name} />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi