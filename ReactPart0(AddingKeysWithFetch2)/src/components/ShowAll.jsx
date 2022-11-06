import React, { useEffect, useState } from 'react'

function ShowAll(props) {
    const [allPost, setAllPost] = useState([])

    useEffect(()=>{
    setAllPost(props.allPost)
    }, [props.allPost])

    let content = allPost.map((ele, idx)=><li key={idx}>{ele.title}</li>)
    // let content = allPost.map(ele=><li key={ele.id + 1}>{ele.title}</li>)

    console.log('ShowAll', allPost);

  return (
    <div className='app'>
          <h1>ShowAll</h1>
          <ul>
          {allPost.length > 0 && content}
          </ul>
    </div>
  )
}

export default ShowAll