import React, {useState} from 'react'
import KQuote from './KQuote'

const ShowKQuote = () => {
    const [quote, setQuote ]= useState('')

    return <div>
        <h1>Sneakers</h1>
        <KQuote quote={quote} setQuote={setQuote}/>
    </div>
}
export default ShowKQuote