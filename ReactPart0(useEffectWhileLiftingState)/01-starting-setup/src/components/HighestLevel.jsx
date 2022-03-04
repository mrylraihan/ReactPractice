import React, { useState, useEffect }from 'react'
import MidLevel from './MidLevel'

const HighestLevel = () => {
    const [res, setRes] = useState(false)
    useEffect(() => {
        console.log('in the highest level useEffect!');
    },[res])
    return (
        <div>
            <MidLevel res={res} setRes={setRes}/>
        </div>
    )
}

export default HighestLevel