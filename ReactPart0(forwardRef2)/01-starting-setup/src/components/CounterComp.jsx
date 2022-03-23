
import React, { useEffect, useRef, useState } from 'react'
import DisplayComp from './DisplayComp'

const FullName = () => {
    const [fullName, setFullName] = useState("")
    const inputRefFirst = useRef(fullName)
    useEffect(()=>{
        document.title = fullName 
        inputRefFirst.current.value = ""
    }, [fullName])
    return (
        <div>
            <DisplayComp ref={inputRefFirst} onClick={()=> setFullName(inputRefFirst.current.value)} fullName={fullName}> the fullName is </DisplayComp>
        </div>
    )
}

export default FullName