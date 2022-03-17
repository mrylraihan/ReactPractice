import React from 'react'
import './TestComp.css'
const TestComp = ({list}) => {
    const renderList = list.map(stuff=>{
        return <li key={stuff.id}>
            <p>{stuff.name}</p>
            <button className={stuff.id == 1 ?"":'noneActive'} >click me</button>
        </li>
    })
    return (
        <ul>
           {renderList} 
        </ul>
    )
}

export default TestComp