import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => {
    	props.handleMoreButton()
    	props.handleRemovingPlates()
    }
}>
            More sushi!
          </button>
}

export default MoreButton