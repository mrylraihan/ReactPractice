import React, {useRef} from 'react'

function AddOne({ setList, list, }) {
   
    const titleRef = useRef()
    const bodyRef = useRef()
   

    const onSubmitHandler = e =>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titleRef.current.value,
                body: bodyRef.current.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(result=>{
                result.id = list.length + 1
                titleRef.current.value = ''
                bodyRef.current.value = ''
                return result
            })
            .then(result=>setList(prev=>[...prev,result]))
            .catch(console.error);
    }

  return (
    <div className='app'>
          <h1>AddOne</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>title :
                    <input type="text" ref={titleRef}/>
                </label>
            </div>
            <div>
                <label>body :
                    <input type="text" ref={bodyRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default AddOne