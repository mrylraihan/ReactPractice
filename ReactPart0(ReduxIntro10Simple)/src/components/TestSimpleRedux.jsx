import React, { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'

function TestSimpleRedux() {
    const nameRef = useRef()
    const name = useSelector(state=>state.name)
    const toggle = useSelector(state=>state.toggle)
    const dispatch = useDispatch()
    // console.log(nameRef.current.value);
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(nameRef.current.value);
        dispatch({ type: 'name', nameInput: nameRef.current.value })
        nameRef.current.value = ''
    }

    const toggleTags = () =>{
        dispatch({type:'toggle'})
    }

    console.log(nameRef, 'nameRef')
    console.log(name, 'name');
    console.log(toggle, 'toggle');
  return (
    <div className='app'>
          {toggle && <h1>Testing Simple Redux</h1>}
          {toggle && <h3>{name?name:'Name Will Be Here'}</h3>}
          <form onSubmit={submitHandler}>
            <div>
                <label>
                    Enter your Name:
                      <input type="text" ref={nameRef}/>
                </label>
            </div>
            <button>submit</button>
          </form>
          <button onClick={toggleTags}>toggle h1</button>
    </div>
  )
}

export default TestSimpleRedux