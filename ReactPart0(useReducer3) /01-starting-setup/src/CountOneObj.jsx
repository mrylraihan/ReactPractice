import React,{ useReducer, useState } from 'react'

const sumUpReducer = (state, action)=>{
    if(action.type === 'ADD'){
        return {count :state.count + +action.plus}
    }else if(action.type === 'MINUS'){
        return {count : state.count - +action.minus}
    }else if(action.type === 'RESET'){
        return {count : 0}
    }
} 

const CountOneObj = () => {
    const [num, setNum] = useState(0)
    const [countObj, dispatch] = useReducer(sumUpReducer, {
        count: 0
    })
    const addSum = ()=>{
        dispatch({ type: 'ADD', plus: num
    })
    setNum(0)
}
const minusSum = ()=>{
    dispatch({
        type: 'MINUS', minus: num
    })
    setNum(0)
    }
    const resetSum = ()=>{
        dispatch({type:'RESET'})
        setNum(0)
    }
    return (
        <div>
        <h1>hello</h1>
        <p>{countObj.count}</p>
        {/* i need to make sure the input is connected to the input */}
        <input type="number" onChange={e=>setNum(e.target.value)} value={num}/>
        <button onClick={addSum}>Add</button>
        <button onClick={minusSum}>Minus</button>
        <button onClick={resetSum}>Reset</button>
        </div>
    )
}

export default CountOneObj