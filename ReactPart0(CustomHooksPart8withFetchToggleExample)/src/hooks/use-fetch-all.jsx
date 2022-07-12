import { useEffect, useState } from 'react'

const useFetchAll = () => {
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setIsLoading(false)

            })
            .catch(err => {
                console.log(err);
                setIsLoading(false)
                setData('')
            })
    }, [])
    return {data, isLoading}
}

export default useFetchAll