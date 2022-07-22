import React from 'react'
import { useNavigate } from 'react-router-dom'

const Extras = () => {
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>Extras</h1>
            <ul>
                <li onClick={nav.bind(this,'/number/1')}>1</li>
                <li onClick={nav.bind(this, '/number/2')}>2</li>
                <li onClick={nav.bind(this, '/number/3')}>3</li>
            </ul>
            
        </div>
    )
}

export default Extras