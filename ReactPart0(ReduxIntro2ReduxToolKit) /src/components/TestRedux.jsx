import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {nameActions} from '../store/index'
function TestRedux() {
    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
    const fullName = useSelector(state => state.fullName)
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const firstNameChange = (e) => {
        dispatch(nameActions.getFirstName(e.target.value ))
    }
    const lastNameChange = (e) => {
        dispatch(nameActions.getLastName(e.target.value ))
    }

    const onsubmitHandler = (e)=>{
        e.preventDefault()
        dispatch(nameActions.getFullName())
        console.log(state);
    }

console.log(fullName);
    return (
        <div>
            {fullName && <h1>{fullName}</h1>}
            {firstName && <h1>{firstName}</h1>}
            {lastName && <h1>{lastName}</h1>}
            <div>
                <form onSubmit={onsubmitHandler}>
                    <div>

                        <label>
                            firstName :
                            <input type="text" value={firstName} onChange={firstNameChange} />
                        </label>
                    </div>
                    <div>

                        <label>
                            lastName :
                            <input type="text" value={lastName} onChange={lastNameChange} />
                        </label>
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default TestRedux