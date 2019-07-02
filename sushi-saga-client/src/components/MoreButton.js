import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(e) => props.handleMore(props)}>
            More sushi!
          </button>
}

export default MoreButton