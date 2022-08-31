import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Test1() {
const nameRef = useRef()
const name = useSelector(state=>state.name)
  const dispatch = useDispatch()

const onSubmitHandler = e =>{
  e.preventDefault()
  dispatch({ type: 'name', n: nameRef.current.value})
  nameRef.current.value=''
}

  return (
    <div>
          <h1>Test1</h1>
          {name && <h4>{name}</h4>}
      <form onSubmit={onSubmitHandler}>
            <div>
                <label> whats your name ?
                      <input type="text" ref={nameRef}/>
                </label>
            </div>
            <button>submit</button>
          </form>
    </div>
  )
}

export default Test1