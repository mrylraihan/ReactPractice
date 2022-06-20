import React, { useRef } from 'react'

const ChangeName = ({ setName }) => {
    const newName = useRef('')
    const submitHandler=(e)=>{
        e.preventDefault()
        setName(newName.current.value)
        newName.current.value = ''
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter the new Name
                    <input type="text" ref={newName}/>
                </label>
                <button type='submit'>change name</button>
            </form>
        </div>
    )
}

export default ChangeName