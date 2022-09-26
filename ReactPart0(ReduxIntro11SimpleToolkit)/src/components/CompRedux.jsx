import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nameActions} from '../store/index'
function CompRedux() {

    const nameRObj = useSelector(state=>state)
    const dispatch = useDispatch()
    const getFirstName = (e) => {
        dispatch(nameActions.getFirstName({first: e.target.value }))
    }
    const getLastName = (e) => {
        dispatch(nameActions.getLastName({ last: e.target.value }))
    }
    const getFullName = (e) => {
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
    const toggle = () => {
        dispatch(nameActions.getToggleName())
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