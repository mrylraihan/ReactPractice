import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShowAll = ({ listOfData }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const nav = useNavigate()

    const getData = ()=>{
        setIsLoading(true)
        setData(listOfData)
        setIsLoading(false)
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>res.json())
        // .then(result => setData(result))
        // .then(()=>setIsLoading(false))
        // .catch(console.error)
    }
    console.log(data);
    let content = <p>no data yet!</p>

    if(isLoading){
        content = <p>...Loading</p>
    }
    if(data.length > 0 && !isLoading){
        content = data.map(ele => <p key={ele.id} onClick={nav.bind(this,`/showOne/${ele.id}`)}>{ele.title}</p>)
    }

    return (
        <div className='app'>
            <button onClick={data.length>0 ? setData.bind(this, []) :getData}> {data.length>0 ? "hide data":"show me all the data" }</button>
            <button onClick={nav.bind(this, -1)}>go back</button>
            {content}
            {/* {data.length > 0 && data.map(ele=><p key={ele.id}>{ele.title}</p>)} */}
        </div>
    )
}

export default ShowAll