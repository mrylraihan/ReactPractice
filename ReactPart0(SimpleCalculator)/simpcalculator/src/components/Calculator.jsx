import React, { useState } from 'react'

const Calculator = () => {
    const [sum, setSum] = useState(0)
    const [inputV, setInputV] = useState(0)
    return (
        <div>
            <p>{sum}</p>
            <button onClick={()=>{
                setSum(prev=>prev+ +inputV) 
                setInputV(0)}}>+</button>
            <button onClick={()=>{
                setSum(prev=>prev- +inputV)
                setInputV(0)}}>-</button>
            <button onClick={() => {
                setSum(prev => prev / +inputV)
                setInputV(0)
            }}>/</button>
            <button onClick={() => {
                setSum(prev => prev * +inputV)
                setInputV(0)
            }}>*</button>
           
            <label>
                <input type="number" value={inputV}  onChange={e=>setInputV(e.target.value)}/>
            </label>
        </div>
    )
}

export default Calculator