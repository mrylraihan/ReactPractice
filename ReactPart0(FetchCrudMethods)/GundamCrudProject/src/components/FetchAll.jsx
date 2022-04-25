import React, { useEffect, useState } from 'react'

const FetchAll = () => {
    const [allGundams, setGundams] = useState([])
    const [btnTrigger, setBtnTrigger] = useState(false)

    useEffect(()=>{
        if(btnTrigger){
            fetch('http://localhost:4000/gundams')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setGundams(res)
                return 
            })
            .catch(console.error)
        }else{
            setGundams([])
        }
    }, [btnTrigger])

    const buttonHandler = ()=>{
        setBtnTrigger(!btnTrigger)
    }
    return (
        <div>
            <button onClick={buttonHandler}>Get all Gundams</button>
            <ul>{allGundams.length>0?allGundams.map(ele=>{
                return <li key={ele.id}>{`${ele.pilot} : ${ele.gundam}`}</li>
            }):allGundams}</ul>
        </div>
    )
}

export default FetchAll