import React, { useRef } from 'react'

function AddPerson(props) {
    const nameRef = useRef()
    const submitHandler = (e)=>{
        e.preventDefault()
        const person = {id:props.list.length + 1 , name:nameRef.current.value}
        nameRef.current.value = ''
        console.log(person);
        props.add(person)
    }
  return (
      <div className='app'>
          <h2>Add One</h2>
          <form onSubmit={submitHandler}>
              <div>
                  <label>name :
                      <input type="text" ref={nameRef}/>
                  </label>
              </div>
              
              <button type='submit'>submit</button>
          </form>
      </div>
  )
}

export default AddPerson