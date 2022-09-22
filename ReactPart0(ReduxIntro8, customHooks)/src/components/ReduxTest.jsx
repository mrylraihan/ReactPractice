import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxTest() {
    const nameRef = useRef()
    const dispatch=useDispatch()
    const name = useSelector(state=>state.name)
    const show = useSelector(state=>state.show)

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        dispatch({type:'name',name:nameRef.current.value})
        nameRef.current.value = ''
    }

  return (
    <div>
          { show && <h1>ReduxTest</h1>}
          {name && <h3>{name}</h3>}
          <button onClick={dispatch.bind(this,{type:'show'})}>show h1</button>
          <form onSubmit={onSubmitHandler}>
            <label>
                name: 
                <input type="text" ref={nameRef}/>
            </label>
            <button>submit Name</button>
          </form>
    </div>
  )
}

export default ReduxTest