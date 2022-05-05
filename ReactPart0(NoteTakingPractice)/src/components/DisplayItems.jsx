import React from 'react'
// import './App.css';

const DisplayItems = ({ list, deleteTask}) => {
    const mappedList = list.map(ele => <li id={ele.id} key={ele.id}>{ele.task} <button onClick={deleteTask
        .bind(this, ele.id)}>delete task</button></li>)
    return (
        <div className='app'>
            <ul>
                {mappedList}
            </ul>
        </div>
    )
}

export default DisplayItems