import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SeeAll(props) {
    const [dataList, setDataList] = useState([])
    const nav = useNavigate()
    const showMeData = ()=>{
        setDataList(dataList.length>0?[]:props.list)
    }
  return (
    <div className='app'>
          <h1>SeeAll</h1>
          <ol>
          {dataList.length > 0 && dataList.map(ele=>{
             return <li key={ele.id}
             onClick={nav.bind(this, `${ele.id}`)}
             >{ele.name}</li>
            })}
          </ol>
          <button onClick={showMeData}>show me data</button>
    </div>
  )
}

export default SeeAll