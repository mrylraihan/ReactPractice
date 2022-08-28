import React from 'react'

const TodoList = (props) => {
    const deleteHandler = (id)=>{
        props.setToDo(prev=>prev.filter(ele=> ele.id !== id))
    }
    const mappedData = props.list.map(ele=>{
        return <div key = {ele.id}>
            <li>{ele.title}</li>
            <button onClick={deleteHandler.bind(this,ele.id)}>delete me</button>
        </div>
    })
    return (
        <div className='app'>
            <h1>Our list</h1>
            {mappedData && mappedData}
        </div>
    )
}

export default TodoList