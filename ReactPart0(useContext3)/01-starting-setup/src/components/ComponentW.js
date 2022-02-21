import React, { useContext } from 'react'
import UserContext2 from '../store/UserContext2'

const ComponentW = () => {
    const context2 = useContext(UserContext2)
    return (
        <div>
            <h2>{context2.name}</h2>
        </div>
    )
}

export default ComponentW