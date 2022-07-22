import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Extras = () => {
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>Extras</h1>
            <ul>
                <li onClick={nav.bind(this,'/extras/1')}>1</li>
                <li onClick={nav.bind(this, '/extras/2')}>2</li>
                <li onClick={nav.bind(this, '/extras/3')}>3</li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Extras