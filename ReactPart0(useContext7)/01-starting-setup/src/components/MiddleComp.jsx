import React, { useContext, useRef } from 'react'
import TestContext from '../context/variable-context'

const MiddleComp = () => {
    const firstName = useRef('')
    const lastName = useRef('')
    const ctx = useContext(TestContext)

    const getFullName =(e)=>{
        e.preventDefault()
        // this getFullN is the method we are grabbing from our Context in our app
        ctx.getFullN(
            firstName.current.value + ' '+ lastName.current.value
        )
        firstName.current.value = ''
        lastName.current.value = ''
    }
    return (
        <div>
            <form onSubmit={getFullName}>
                <div>
                <label>firstName :
                    <input type="text" ref={firstName}/>
                </label>
                </div>
                <div>
                <label>lastName :
                    <input type="text" ref={lastName}/>
                </label>
                </div>
                <div>
                    <button type='submit'>Full Name</button>
                </div>
            </form>
        </div>
    )
}

export default MiddleComp