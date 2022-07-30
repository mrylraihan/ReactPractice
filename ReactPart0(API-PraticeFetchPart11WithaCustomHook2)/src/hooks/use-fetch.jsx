import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, [])
    return [data, setData]
}

export default useFetch