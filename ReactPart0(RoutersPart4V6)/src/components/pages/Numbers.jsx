import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Numbers = () => {
    const params = useParams()
    const num = params.num
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>Numbers</h1>
            <h3>{num}</h3>
            <button onClick={nav.bind(this, '/extras')}> go back to list in extras</button>
        </div>
    )
}

export default Numbers