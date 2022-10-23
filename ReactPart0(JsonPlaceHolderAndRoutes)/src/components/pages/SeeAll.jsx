import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SeeAll({allPost, setAllPost}) {
  const nav = useNavigate()

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setAllPost)
    .catch(console.error)
  },[])
  let content = allPost.map((ele)=>{
    return <div key={ele.id} onClick={nav.bind(this,`/seeAll/${ele.id}`)}><li>{ele.title}</li>
    <p>{ele.body}</p></div>
  })
  console.log(allPost);
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