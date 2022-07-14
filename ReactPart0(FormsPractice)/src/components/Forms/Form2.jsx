import React, { useRef, useState } from 'react'
// this isnt really a form its just a div with inputs
const Form2 = () => {
    const [fullName, setfullName] = useState('')
    const fName = useRef()
    const lName = useRef()

    const onSubmitHandler = () => {
        setfullName(`${fName.current.value} ${lName.current.value}`)
        fName.current.value = ''
        lName.current.value = ''
    }

    return (
        <div className='app'>
            <h3>Form # 2</h3>
            <p>just using useRef()</p>
            <h5>{fullName}</h5>
            <div>
                <div>
                    <label>first name:
                        <input type="text" ref={fName} />
                    </label>
                </div>
                <div>
                    <label>last name:
                        <input type="text" ref={lName} />
                    </label>
                </div>
                <button onClick={onSubmitHandler}>submit name</button>
            </div>
        </div>
    )
}

export default Form2