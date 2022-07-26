import React, { useState } from 'react'

const Test1 = () => {

    const [blurValue, setBlurValue] = useState('')
    const [changeValue, setChangeValue] = useState('')

    const blurHandler = e =>{
        setBlurValue(e.target.value)
        e.target.value = ''
    }
    const onChangeHandler = e =>{
        setChangeValue(e.target.value)
    }
    const onsubmitHandler = (a)=> a('')
    console.log(blurValue, 'from onBlur');//every time we click out of focus of the input field
    console.log(changeValue, 'from onChange');//on every keypress in the input field 
    
    return (
        <div>
            <h1>Test 1</h1>
            <div>
                <p>{blurValue}</p>
            <label> name Test 1 blur:
                {/* you cant put a value on something that doesnt have an onchange */}
                    <input type="text" onBlur={blurHandler}/>
            </label>
                <button onClick={onsubmitHandler.bind(this, setBlurValue)}>erase me</button>
            </div>
            <div>
                <p>{changeValue}</p>
            <label> name Test 1 state:
                <input type="text" onChange={onChangeHandler} value={changeValue}/>
            </label>
                <button onClick={onsubmitHandler.bind(this, setChangeValue)}>erase me</button>
            </div>
        </div>
    )
}

export default Test1