import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
const Details = (props) => {
    const [person, setPerson] = useState({})
    const params = useParams()
    const id = params.userID
 
    useEffect(()=>{
        setPerson(prev=> prev = props.peopleArray.filter(ele => ele.id == id)[0])
    }, [params]) //we can use this useEffect to run this function whenever teh params change 
    // or we can use this button to change the state of our persons state
    // const showme = ()=>{
    // setPerson( props.peopleArray.filter(ele=>ele.id==id)[0])
    // }
    return (
        <div>
            {/* <button onClick={showme}>show me</button> */}
            {person && <h1>{person.name}</h1>}
            <p>{id} from params</p>
            </div>
    )
}

export default Details