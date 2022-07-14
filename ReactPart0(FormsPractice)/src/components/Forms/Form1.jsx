import React, { useState } from 'react'
// this isnt really a form its just a div with inputs
const Form1 = () => {
    const [fName, setfName]= useState('')
    const [lName, setlName]= useState('')
    const [fullName, setfullName]= useState('')

    const onSubmitHandler = () =>{
        setfullName(`${fName} ${lName}`)
        setfName('')
        setlName('')
    }

    return (
        <div className='app'>
            <h3>Form # 1</h3>
            <p>just using useState()</p>
            <h5>{fullName}</h5>
            <div>
                <div>
                    <label>first name:
                        <input type="text" value={fName} onChange={e=>setfName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>last name:
                        <input type="text" value={lName} onChange={e=>setlName(e.target.value)} />
                    </label>
                </div>
                <button onClick={onSubmitHandler}>submit name</button>
            </div>
        </div>
    )
}

export default Form1