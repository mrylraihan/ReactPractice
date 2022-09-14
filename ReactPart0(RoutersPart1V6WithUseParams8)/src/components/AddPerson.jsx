import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPerson(props) {
    const nameRef = useRef()
    const nav = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault()
        props.setData(prev=>[...prev, {name:nameRef.current.value, id:prev.length}])
        nameRef.current.value = ''
        nav('/seeAll')
    }
  return (
    <div>
          <h1>AddPerson</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label> person Name:
                      <input type="text" ref={nameRef}/>
                </label>
            </div>
            <button>Submit</button>
          </form>
    </div>
  )
}

export default AddPerson