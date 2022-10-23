import React, { useEffect } from 'react'

function SeeAll({allPost, setAllPost}) {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setAllPost)
    .catch(console.error)
  },[])
  let content = allPost.map((ele)=>{
    return <div key={ele.id}><li>{ele.title}</li>
    <p>{ele.body}</p></div>
  })
  return (
      <div className='app'>
      <h3>SeeAll</h3>
      <div>
    {allPost.length>0 && <ul>{content}</ul>}
      </div>
      </div>
  )
}

export default SeeAll