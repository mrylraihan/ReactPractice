import { useState } from 'react'

function useInput() {
    const [value, setValue] = useState('')

    const valueOnChangeHandler =(e)=>{
        setValue(e.target.value)
    }
    const reset =()=>setValue('')


    return [value, valueOnChangeHandler, reset] 
        
    
}

export default useInput
