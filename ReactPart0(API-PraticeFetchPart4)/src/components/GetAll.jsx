import React, { useEffect, useState } from 'react'

const GetAll = () => {
    const [resultList, setRList] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result=>result.json())
        .then(result=>{
            setRList(result)
            console.log((result));
            return result
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            {resultList.length>0 ? resultList.map(ele=><div className='app2'>
                <p key={ele.id}>{ele.title}</p></div>):<p>Its empty here!</p>}
        </div>
    )
}

export default GetAll