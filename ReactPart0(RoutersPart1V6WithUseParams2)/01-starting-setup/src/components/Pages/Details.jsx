import React from 'react'
import {useParams} from 'react-router-dom'
const Details = (props) => {
    const params = useParams()
    const id = params.userID
    const peopleArray = [
        { id: 1, name: 'Meshia' },
        { id: 2, name: 'Heshow' },
        { id: 3, name: 'Wallie' }
    ]
    return (
        <div>
            <h1>{peopleArray[id-1].name}</h1>
            <p>{id} from params</p>
            </div>
    )
}

export default Details