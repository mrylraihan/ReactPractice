import React from 'react'

function ListResultComp(props) {
console.log(props.list);
let content = props.list.map((ele,idx)=><li key={idx}>{ele}</li>)
  return (
    <div className='app'>
          <h4>ListResultComp</h4>
          <ul>
            {content}
          </ul>
    </div>
  )
}

export default ListResultComp