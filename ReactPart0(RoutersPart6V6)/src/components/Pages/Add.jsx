import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Add({setList}) {
    const [singlePost, setSinglePost] = useState('')
    const nameRef = useRef()
    const bodyRef = useRef()
    const nav = useNavigate()

    useEffect(()=>{
      if(singlePost){

        setList(prev=>{
          return [...prev, singlePost]
        })
      }
    }, [singlePost])

    const submitHandler = e =>{
        e.preventDefault()
        const inputTitle = nameRef.current.value
        const inputBody = bodyRef.current.value
      const isValid = inputTitle.trim() !== ''
        if (isValid){

          fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
            body: JSON.stringify({
              title: inputTitle,
              body: inputBody,
              userId: 1,
            }),
            headers:{
              'Content-type': 'application/json'
            }
          })
          .then(res=>res.json())
          .then(setSinglePost)
          .catch(console.error)
        }

        nameRef.current.value = ''
        bodyRef.current.value = ''
    }
    console.log(singlePost);
  return (
    <div className='app'>
        <h1>Add someone</h1>
        {/* {singlePerson && <p>{singlePerson.name}</p>} */}
          <form onSubmit={submitHandler}>
           <div>
            <label>
                whats the title?
                <input type="text" ref={nameRef} />
            </label>
           </div>
           <div>
            <label>
               what are the details?
                <input type="text" ref={bodyRef} />
            </label>
           </div>
            <button>submit</button>
        </form>
        <button onClick={nav.bind(this, '/all')}>go to all page</button>
          <button onClick={nav.bind(this, '/')}>go to main page</button>
    </div>
  )
}

export default Add