import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShowAllData = (props) => {
    const [list, setList] = useState('')
    const nav = useNavigate()
    const hideList = ()=> setList('')
    const showList = ()=> setList(props.data)
    let content = list ? list.map(ele => <p key={ele.id} onClick={nav.bind(this, `/showOne/${ele.id}`)}>{ele.title}</p>) : ''

    return (
        <div className='app'>
            <h1>Show all todo's</h1>
            <button onClick={list ? hideList:showList}>{list.length>0? 'hide data': "show data"}</button>
            {list && content}
        </div>
    )
}

export default ShowAllData;