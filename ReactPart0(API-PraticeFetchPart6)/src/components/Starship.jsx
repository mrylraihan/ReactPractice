import React from 'react'

const Starship = (props) => {
    return (
        <div className='app'>
            <p>{props.result.name}</p>
            <p>{props.result.starship_class}</p>
        </div>
    )
}

export default Starship