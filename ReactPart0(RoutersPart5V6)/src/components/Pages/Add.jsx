import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Add({list , setList}) {
    const [singlePerson, setSinglePerson] = useState('')
    const nameRef = useRef()
    const nav = useNavigate()

    const submitHandler = e =>{
        e.preventDefault()
        const inputName = nameRef.current.value
        const isValid = inputName.trim() !== ''
        if (isValid){
            setSinglePerson({ name: inputName })
            setList(prev=>{
                return [...prev, {name:inputName, id: prev.length}]
            })
        }

        nameRef.current.value = ''
    }
  return (
    <div>
        <h1>Add someone</h1>
        {singlePerson && <p>{singlePerson.name}</p>}
          <form onSubmit={submitHandler}>
            <label>
                who's the person you want to add?
                <input type="text" ref={nameRef} />
            </label>
            <button>submit</button>
        </form>
        <button onClick={nav.bind(this, '/all')}>go to all page</button>
          <button onClick={nav.bind(this, '/')}>go to main page</button>
    </div>
  )
}

export default Add