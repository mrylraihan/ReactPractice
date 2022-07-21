import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)
            .then(setData)
            .catch(console.error)
    }, [])
    return [data, setData]
    // return data
}

export default useFetch