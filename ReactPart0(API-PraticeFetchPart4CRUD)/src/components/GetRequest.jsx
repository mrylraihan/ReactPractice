import React, { useEffect, useState } from 'react'

// cors practice component
const GetRequest = () => {
    const [resultList, setRList] = useState('')
    useEffect(() => {
        fetch('http://localhost:4000/')
            .then(result => result.json())
            .then(result => {
                setRList(result.message)
                console.log((result));
                return result
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {resultList&& <p>{resultList}</p>}
        </div>
    )
}

export default GetRequest