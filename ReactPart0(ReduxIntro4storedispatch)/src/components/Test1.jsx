import React from 'react'
import {useStore, useSelector} from 'react-redux'

function Test1() {
const name = useSelector(state=>state.name)
  const store = useStore()

const onChangeName = e =>{
    store.dispatch({ type: 'name', n: e.target.value})
}

  return (
    <div>
          <h1>Test1</h1>
          {name && <h4>{name}</h4>}
          <form onSubmit={()=>store.dispatch({type:''})}>
            <div>
                <label> whats your name ?
                      <input type="text" value={name} onChange={onChangeName}/>
                </label>
            </div>
            <button>submit</button>
          </form>
    </div>
  )
}

export default Test1