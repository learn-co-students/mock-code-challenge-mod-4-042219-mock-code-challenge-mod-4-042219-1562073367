import React from 'react'

export default class SushiWallet extends React.Component {
	render(){
		return(
			<form onChange={this.props.handleWalletChange} onSubmit={(e)=> {
				e.preventDefault()
				this.props.handleWalletSubmit()
				}
			}>
				<label>Add Some $$$$$$</label>
				<input type="number"/>
			</form>
		)
	}
}

// //e.persist()
// 				e.preventDefault()
// 				console.log(e.target.value)
// 				this.props.handleWalletSubmit(e.target.value)