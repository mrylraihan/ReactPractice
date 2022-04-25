import React, { useEffect, useState } from 'react'

const FetchPatch = () => {
    const [pilotId, setPilot] = useState('')
    const [gundam, setGundam] = useState('')
    const [gp, setGp] = useState(null)
    const [singleGundam, setSingleGundam] = useState(null)
    useEffect(() => {
        if (gp) {
            fetch(`http://localhost:4000/gundams/${gp.pilotId}`,
             {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({gundam: gp.gundam})
            })
                .then(res => res.json())
                .then(result => {
                    return setSingleGundam(result)
                })
                .catch(console.error)
        }
    }, [gp])
    const submitHandler = () => {
        setGp({ pilotId:pilotId, gundam: gundam })
        console.log({gundam: gundam })
        setPilot('')
        setGundam('')
    }
    return (
        <div >
                <label htmlFor='pilot'>Pilot Id :
                    <input type='number' id='pilot' value={pilotId} onChange={(e => setPilot(e.target.value))} />
                </label>
                <label htmlFor='gundam'>Gundam Name Edits :
                    <input type='text' id='gundam' value={gundam} onChange={(e => setGundam(e.target.value))} />
                </label>
            <button onClick={submitHandler}>Patch your Mech by Id</button>
            <h2>{singleGundam ? `${singleGundam.pilot} : ${singleGundam.gundam}` : ''}</h2>
        </div>
    )
}

export default FetchPatch