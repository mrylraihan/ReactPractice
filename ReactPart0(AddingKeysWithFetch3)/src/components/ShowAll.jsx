import React, { useEffect, useState } from 'react'

function ShowAll(props) {
    // const [allPost, setAllPost] = useState([])

    // useEffect(()=>{
    // setAllPost(props.allPost)
    // }, [props.allPost])

  let content = props.allPost.map(ele=><li key={ele.id}>{ele.title}</li>)

  console.log('ShowAll', props.allPost);

  return (
    <div className='app'>
          <h1>ShowAll</h1>
          <ul>
        {props.allPost.length > 0 && content}
          </ul>
    </div>
  )
}

export default ShowAll