import { useState } from 'react'

function useInput(fuse , type) {
    const [value, setValue] = useState('')

    const valueOnChangeHandler =(e)=>{
        setValue(e.target.value)
    }
    const reset =()=>setValue('')

    const addTogether=()=>{
        if(type === 'f'){
            fuse(prev=>{
                return {...prev, firstName:value}
            })
        } else if (type === 'l'){
            fuse(prev => {
                return { ...prev, lastName: value }
            })
        }
    }


    return [value, valueOnChangeHandler, addTogether, reset] 
        
    
}

export default useInput
