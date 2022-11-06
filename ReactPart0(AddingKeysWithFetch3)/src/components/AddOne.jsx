import React, { useRef } from 'react'

function AddOne(props) {
    const titleRef = useRef()
    const bodyRef = useRef()


    const sendPost = (data)=>{
        const options = {
            method:"POST",
            body:JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
            }
        fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(res=>res.json())
        .then(result=>{
                return { ...result, id: props.list.length + 1}
        })
            .then(props.addToList)
        .catch(console.error)
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        const data = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            userId: 1,
        }
        sendPost(data)
        titleRef.current.value = ''
        bodyRef.current.value = ''

    }
  return (
    <div className='app'>
          <h2>AddOne</h2>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title :
                    <input type="text" ref={titleRef}/>
                </label>
            </div>
            <div>
                <label>Body :
                    <input type="text" ref={bodyRef}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default AddOne