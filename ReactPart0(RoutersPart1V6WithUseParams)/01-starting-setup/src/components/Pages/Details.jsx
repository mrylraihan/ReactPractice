import React from 'react'
import {useParams} from 'react-router-dom'
const Details = (props) => {
    const params = useParams()
    const id = params.userID
 
    return (
        <div>
            <h1>{props.peopleArray[id-1].name}</h1>
            <p>{id} from params</p>
            </div>
    )
}

export default Details