import React, { useEffect, useState } from 'react'

function ShowAll(props) {
const [list, setList] = useState([])
// console.log(props.list);
useEffect(()=>{
    setList(props.list)
},[props.list])
    // console.log(list);

    const mappedContent = list.map(ele=><li key={ele.id} >{ele.title}</li>)
    // console.log(mappedContent);
return (
    <div className='app'>
          <h1>ShowAll</h1>
          <ul>
           {props.list.length>0 && mappedContent}
          </ul>
    </div>
  )
}

export default ShowAll