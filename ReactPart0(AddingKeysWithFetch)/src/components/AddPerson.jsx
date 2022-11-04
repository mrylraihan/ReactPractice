import React, { useRef } from 'react'

function AddPerson(props) {
    const nameRef = useRef()
    const submitHandler = (e)=>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: nameRef.current.value,
                body: nameRef.current.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(result =>{ 
                result.id = props.list.length + 1
                nameRef.current.value = ''
                return result 
            }
            ).then(props.add)
            .then((json) => console.log(json));
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