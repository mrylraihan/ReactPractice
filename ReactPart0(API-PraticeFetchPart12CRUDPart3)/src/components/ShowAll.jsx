import React, { useState } from 'react'

function ShowAll({list}) {
// const [list, setList] = useState(props.list)
// // console.log(props.list);
// useEffect(()=>{
//     setList(props.list)
// },[props.list])
//     console.log(list);

    const mappedContent = list.map(ele=><div key={ele.body}><li>{ele.title}</li></div>)
    // console.log(mappedContent);
return (
    <div className='app'>
          <h1>ShowAll</h1>
          <ul>
           {list && mappedContent}
          </ul>
    </div>
  )
}

export default ShowAll