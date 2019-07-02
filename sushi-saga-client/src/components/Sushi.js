import React, { Fragment } from 'react'

const Sushi = (props) => {


  // let handleeaten = ()=>{
  //   eaten = true
  //   console.log(eaten);
  // }
  console.log(props.sushi);
  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! handleeaten*/e=>props.handleeaten(props.sushi) }>
        {
          /* Tell me if this sushi has been eaten! */
          false?
            null
          :
            <img src={/* Give me an image source! */props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */props.sushi.name} - ${/* Give me a price! */props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi


// import React, { Component } from 'react';
//
// class Sushi extends Component {
//
//   state={
//     eaten:false
//   }
//
//   handleeaten = ()=>{
//     this.setState({
//       eaten: true
//     })
//   }
//   redner(){
//     return (
//       <div className="sushi">
//         <div className="plate"
//              onClick={/* Give me a callback! */ this.handleeaten}>
//           {
//             /* Tell me if this sushi has been eaten! */
//             this.state.eaten ?
//               null
//             :
//               <img src={/* Give me an image source! */this.props.sushi.img_url} width="100%" />
//           }
//         </div>
//         <h4 className="sushi-details">
//           {/* Give me a name! */this.props.sushi.name} - ${/* Give me a price! */this.props.sushi.price}
//         </h4>
//       </div>
//     )
//   }
// }
//
// export default Sushi;
