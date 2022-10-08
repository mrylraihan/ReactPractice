import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function NameComp() {
    const name = useSelector(state=>state)
    const toggle = useSelector(state=> state.toggle)
    const dispatch = useDispatch()

    const getFirst = (e)=>{
        dispatch({type:'ft', first:e.target.value})
    }
    const getLast = (e)=>{
        dispatch({ type: 'lt', last: e.target.value })
    }
    const getFull = (e)=>{
        e.preventDefault()
        dispatch({ type: 'fl'})
    }
    const getToggle = (e)=>{
        dispatch({ type: 'tg'})
    }
  return (
    <div className='app'>
          <h4>NameComp</h4>
          <p>testing basic redux</p>
            {toggle && <h3>{name.fullName}</h3>}
          <form onSubmit={getFull}>
            <div>
                <label>
                    <input type="text" value={name.firstName} onChange={getFirst}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={name.lastName} onChange={getLast}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>

          <button onClick={getToggle}>toggle</button>
    </div>
  )
}

export default NameComp