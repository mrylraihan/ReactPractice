import React, { useState, useRef } from 'react'


function GetById({list}) {
  const [singlePost, setSinglePost] = useState('')
  const idRef = useRef()

  const submitHandler = (e) =>{
    e.preventDefault()
    const id = idRef.current.value
    setSinglePost(list.find(ele => ele.id == +id))
    idRef.current.value = ''
  }

  return (
    <div className='app'>
      <h3>GetById</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            id you want to see
            <input type="number" ref={idRef}/>
          </label>
        </div>
        <button>get by id</button>
      </form>
      {singlePost && <p>{singlePost.title}</p>}
      {singlePost && <p>{singlePost.body}</p>}
    </div>
  )
}

export default GetById