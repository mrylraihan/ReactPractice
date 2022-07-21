import { useState } from 'react'

function useToggle(initial=false) {
    const [toggle, setToggle] = useState(initial)
    
    const changeResult =()=>{
        setToggle(!toggle)
    }

    return [toggle, changeResult]
}

export default useToggle
