import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
function CompRedux() {
    // const firstName = useSelector(state=>state.firstName)
    const nameRObj = useSelector(state=>state)
    const dispatch = useDispatch()
    const getFirstName = (e) => {
        dispatch({ type: 'first', first: e.target.value })
    }
    const getLastName = (e) => {
        dispatch({ type: 'last', last: e.target.value })
    }
    const getFullName = (e) => {
        e.preventDefault()
        dispatch({ type: 'full' })
    }
    const toggle = () => {
        dispatch({ type: 'toggle' })
    }
console.log(nameRObj);
    return (
        <div className='app'>
            <h1>CompRedux</h1>
            {nameRObj.toggleName && <h3>{nameRObj.fullName}</h3>}
            <form onSubmit={getFullName}>
                <div>
                    <label>firstName :
                        <input type="text" value={nameRObj.firstName} onChange={getFirstName} />
                    </label>
                </div>
                <div>
                    <label>lastName :
                        <input type="text" value={nameRObj.lastName} onChange={getLastName} />
                    </label>
                </div>
                <button>Submit</button>
            </form>
            <button onClick={toggle}>toggle name</button>
        </div>
    )
}

export default CompRedux