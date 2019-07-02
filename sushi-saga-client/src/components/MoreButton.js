import React from 'react'

class MoreButton extends React.Component{

  state = {
    moreSushi: false
  }

  toggleMoreSushi = () => {
    this.setState({moreSushi: true})
  }
  
    render (){
    return (<button onClick={this.toggleMoreSushi}>
            More Sushi!
            {
            this.state.moreSushi ? 
              null :
              null
            }
          </button>
    )}
}

export default MoreButton