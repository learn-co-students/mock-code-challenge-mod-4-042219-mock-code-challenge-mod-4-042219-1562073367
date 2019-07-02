import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  // let show = []
  // console.log(props.allSushis[0]);
  //
  // for (let i = 0; i < 3; i++) {
  //   show.push(<Sushi key={props.allSushis[i].id} sushi={props.allSushis[i]}/>)
  // }
  //
  // console.log(show);
  let start = props.list*4-4
  let end = props.list*4
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */


          props.allSushis.slice(start,end).map(sushi =>{
            return <Sushi key={sushi.id} eaten={props.eaten} handleeaten={props.handleeaten} sushi={sushi}/>
          })
        }
        <MoreButton handlelist ={props.handlelist}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
