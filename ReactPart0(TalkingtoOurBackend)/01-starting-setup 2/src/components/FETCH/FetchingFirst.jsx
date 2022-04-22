import React, { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'
const FetchingFirst = () => {
    const [firstHit, setData] = useState('')
    const [btnTrigger, setBtnTrigger] = useState(false)

    useEffect(() => {
        if (btnTrigger) {
            const res = fetch(`http://localhost:4000/`)
            res.then(res => res.json())
                .then(result => {
                    console.log(result);
                    setData(result.message)
                })
        } else {
            setData('')
        }
    }, [btnTrigger])

    const buttonHandler = () => {
        setBtnTrigger(!btnTrigger)
    }
    
    return (
        <div>
            <Button onClick={buttonHandler}>see what comes up first!</Button>
            <h3>{firstHit ? firstHit : ''}</h3>
        </div>
    )
}

export default FetchingFirst