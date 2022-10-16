import React, { useRef, useState } from 'react'

function AddUser() {
    const nameRef = useRef()
    const [newUser, setNewUser] = useState('')

    const submitUser =(e)=>{
        e.preventDefault()
        const user = {name:nameRef.current.value}
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:4000/user/', request)
        .then(res=>res.json())
        .then(setNewUser)
        .catch(console.error)
        nameRef.current.value = ''
    }
    console.log(newUser);
  return (
    <div className='app'>
          <form onSubmit={submitUser}>
            <div>
                <label>
                    submit Name :
                    <input type="text" ref={nameRef} />
                </label>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddUser