import React from 'react'

function ShowAll(props) {
    const content = props.list.map(ele=> <div key={ele.id}><li>{ele.title}</li></div>)
  return (
    <div className='app'>
          <h2>ShowAll</h2>
          <ul>
            {props.list.length > 0 && content}
          </ul>
    </div>
  )
}

export default ShowAll