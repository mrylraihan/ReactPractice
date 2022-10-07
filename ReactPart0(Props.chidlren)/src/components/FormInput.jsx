import React from 'react'
import { useState } from 'react'

function FormInput(props) {
    const [inputValue, setInputValue] = useState('')

    const getInput =  e =>{
        setInputValue(e.target.value)
    }
    const getChildren = ()=>{
        props.setChildren(inputValue)
    }
    console.log(inputValue);
  return (
    <div className='app'>
          <h5>FormInput</h5>
          <div>
            <label>
                pass into children
                <input type="text" value={inputValue} onChange={getInput}/>
            </label>
            <button onClick={getChildren}>submit children</button>
          </div>
    </div>
  )
}

export default FormInput