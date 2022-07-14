import React, { useRef, useState } from 'react'
// this isnt really a form its just a div with inputs
const Form3 = () => {
    const [fullName, setfullName] = useState('')
    const fName = useRef()
    const lName = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setfullName(`${fName.current.value} ${lName.current.value}`)
        fName.current.value = ''
        lName.current.value = ''
    }

    return (
        <div className='app'>
            <h3>Form # 3</h3>
            <p>just using useRef()and an actual form tag</p>
            <h5>{fullName}</h5>
            <form onSubmit={onSubmitHandler}>
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
                <button type='submit'>submit name</button>
            </form>
        </div>
    )
}

export default Form3