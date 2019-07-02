import React, { useState } from 'react'

const MoneyForm = (props) => {
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleMoney(amount)
        setAmount("")
    }

    const handleInput = (e) => {
        setAmount(e.target.value)
    }

    return (
        <form className='moneyForm' onSubmit={handleSubmit}>
            <label>
                <input type="number" min='0' value={amount} onChange={handleInput}/>
            </label>
            <input type="submit" value="ADD MO MONEY" />
        </form>
    )
}

export default MoneyForm