import React, { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'
const FetchingAll = () => {
    const [allGundams, setData] = useState([])
    const [btnTrigger, setBtnTrigger]= useState(false)

    useEffect(()=>{
        if(btnTrigger){
            const res = fetch(`http://localhost:4000/gundams/`)
            res.then(res=>res.json())
            .then(result=>{
                console.log(result);
                setData(result)
            })
        }else{
            setData([])
        }
    },[btnTrigger])

    const buttonHandler = ()=>{
        setBtnTrigger(!btnTrigger)
    }
    const gundamList = allGundams.map(ele=><li key={ele.id}>Pilot: {ele.pilot}, Gundam: {ele.gundam}</li>)
    return (
        <div>
            <Button onClick={buttonHandler}>Get All Gundams from our backend!</Button>
            <ul>{gundamList?gundamList:''}</ul>
        </div>
    )
}

export default FetchingAll