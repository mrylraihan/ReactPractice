import { useEffect, useState } from 'react'

const useFetch = () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
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

    },[url])
    
    return {data, setUrl, isLoading}
}

export default useFetch