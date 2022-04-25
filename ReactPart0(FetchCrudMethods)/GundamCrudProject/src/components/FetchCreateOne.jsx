import React, { useEffect, useState } from 'react'

const FetchCreateOne = () => {
    const [pilot, setPilot] = useState('')
    const [gundam, setGundam] = useState('')
    const [gp, setGp] = useState(null)
    const [singleGundam, setSingleGundam] = useState(null)
    useEffect(()=>{
        if(gp){
            fetch('http://localhost:4000/gundams', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(gp)
            })
            .then(res=>res.json())
            .then(result=>{
                return setSingleGundam(result)
            })
            .catch(console.error)
        }
    },[gp])
    const submitHandler = (e)=>{
        e.preventDefault()
        setGp({pilot: pilot, gundam: gundam})
        console.log({pilot: pilot, gundam: gundam})
        setPilot('')
        setGundam('')
    }
    return (
        <div >
            <form onSubmit={submitHandler}>
                <label htmlFor='pilot'>Pilot Name :
                    <input type='text' id='name' value={pilot} onChange={(e=>setPilot(e.target.value))}/>
                </label>
                <label htmlFor='gundam'>Gundam Name :
                    <input type='text' id='gundam' value={gundam} onChange={(e=>setGundam(e.target.value))}/>
                </label>
                <button type='submit'>Create your Mech</button>
            </form>
            <h2>{singleGundam ? `${ singleGundam.pilot } : ${ singleGundam.gundam }`:''}</h2>
        </div>
    )
}

export default FetchCreateOne