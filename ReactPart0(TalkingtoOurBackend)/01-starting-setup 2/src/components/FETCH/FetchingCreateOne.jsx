import React, { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'

const FetchingCreateOne = () => {
    const [gundamId, setGundamId] = useState('')
    const [gId, setGID] = useState('')
    const [btnTrigger, setBtnTrigger] = useState(false)
    const [gundam, setGundam] = useState(null)


    useEffect(() => {
        if (btnTrigger) {
            const res = fetch(`http://localhost:4000/gundams/${gId}`)
            res.then(res => res.json())
                .then(result => {
                    console.log(result);
                    setGundam(result)

                })
        } else {

        }
    }, [btnTrigger, setGID])

    const buttonHandler = () => {
        setGID(gundamId)
        setGundamId('')
        setBtnTrigger(!btnTrigger)
    }


    return (
        <div>
            <label>
                Which Gundam are you looking for:
                <input type="number" value={gundamId} onChange={(e) => {
                    setGundamId(e.target.value)
                }} />
            </label>
            <Button onClick={buttonHandler}>Submit your Gundam </Button>
            <h3>{gundam ? `Pilot: ${gundam.pilot} / Gundam: ${gundam.gundam}` : ''}</h3>
        </div>
    )
}

export default FetchingCreateOne