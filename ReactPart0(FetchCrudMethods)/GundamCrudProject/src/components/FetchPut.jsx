import React, { useEffect, useState } from 'react'

const FetchPut = () => {
    const [pilotId, setIdPilot] = useState('')
    const [gundam, setGundam] = useState('')
    const [pilot, setPilot] = useState('')
    const [gp, setGp] = useState(null)
    const [singleGundam, setSingleGundam] = useState(null)
    useEffect(() => {
        if (gp) {
            fetch(`http://localhost:4000/gundams/${gp.pilotId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ gundam: gp.gundam , pilot:gp.pilot})
                })
                .then(res => res.json())
                .then(result => {
                    return setSingleGundam(result)
                })
                .catch(console.error)
        }
    }, [gp])
    const submitHandler = () => {
        setGp({ pilotId: pilotId, gundam: gundam , pilot: pilot})
        console.log({ gundam: gundam })
        setIdPilot('')
        setGundam('')
        setPilot('')
    }
    return (
        <div >
            <label htmlFor='pilotId'>Pilot Id :
                <input type='number' id='pilotId' value={pilotId} onChange={(e => setIdPilot(e.target.value))} />
            </label>
            <label htmlFor='gundam'>Gundam Name Edits :
                <input type='text' id='gundam' value={gundam} onChange={(e => setGundam(e.target.value))} />
            </label>
            <label htmlFor='pilot'>Pilot Name Edits :
                <input type='text' id='pilot' value={pilot} onChange={(e => setPilot(e.target.value))} />
            </label>
            <button onClick={submitHandler}>Edit by ID</button>
            <h2>{singleGundam ? `${singleGundam.pilot} : ${singleGundam.gundam}` : ''}</h2>
        </div>
    )
}

export default FetchPut