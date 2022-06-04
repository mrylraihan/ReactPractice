import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const GetAllAxios = () => {
    const [resultList, setRList] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result=>result.data)
        .then(result=>{
            setRList(result)
            console.log((result));
            return result
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            {resultList && resultList.map(ele=><div className='app2'>
                <p key={ele.id} onClick={()=>{
                    navigate(`/GetAllAxios/${ele.id}`)
                }}>{ele.title}</p>
                
                </div>)}
        </div>
    )
}

export default GetAllAxios