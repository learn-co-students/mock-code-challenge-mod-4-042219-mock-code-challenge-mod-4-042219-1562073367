import React, { Fragment } from 'react'

const Sushi = (props) => {
  // debugger
  // const [table, setTable] = useState([]);
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={(e) => props.handleClick(props.table, props)}>
        { 
          props.table.includes(props) 
          ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi