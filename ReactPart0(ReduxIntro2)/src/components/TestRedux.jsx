import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function TestRedux() {
    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
    const fullName = useSelector(state => state.fullName)
    const dispatch = useDispatch()

    const firstNameChange = (e) => {
        dispatch({ type: 'first', first: e.target.value })
    }
    const lastNameChange = (e) => {
        dispatch({ type: 'last', last: e.target.value })
    }

    const onsubmitHandler = (e)=>{
        e.preventDefault()
        dispatch({type :'full'})
        dispatch({ type: 'last', last: '' })
        dispatch({ type: 'first', first: '' })
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