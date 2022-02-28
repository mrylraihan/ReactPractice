import React, {useState} from 'react'
import StarShip from './KQuote'

const StarShips = () => {
    const [quote, setQuote ]= useState('')

    return <div>
        <h1>Sneakers</h1>
        <StarShip quote={quote} setQuote={setQuote}/>
    </div>
}
export default StarShips