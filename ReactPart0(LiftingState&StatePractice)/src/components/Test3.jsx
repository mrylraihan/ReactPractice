import React, { useState } from 'react'

const Test3 = (props) => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    
    const onChangeHandlerF = (e)=>{
        setFName(e.target.value)
    }
    const onChangeHandlerL = (e)=>{
        setLName(e.target.value)
    }
    const submitHandler = () =>{
        props.setFullName(`${fName} ${lName}`)
        setFName('')
        setLName('')
    }
    return (
        <div>
            <h1>Test3</h1>
            <div>
                <h4>{`${fName} ${lName}`}</h4>
                <div>
                    <label>first name:
                        <input type="text" value={fName} onChange={onChangeHandlerF}/>
                    </label>
                </div>
                <div>
                    <label>last name:
                        <input type="text" value={lName} onChange={onChangeHandlerL}/>
                    </label>
                </div>
                <button onClick={submitHandler}>submit</button>
            </div>
        </div>
    )
}

export default Test3