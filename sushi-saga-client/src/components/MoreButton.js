import React from 'react'

const MoreButton = (props) => {
  //console.log('morebutton: ', props);
  return <button onClick={props.moreButtonHandler}>
          More sushi!
        </button>
}

export default MoreButton
