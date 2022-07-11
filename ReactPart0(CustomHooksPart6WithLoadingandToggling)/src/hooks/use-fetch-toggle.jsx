import { useEffect, useState } from 'react'

const useFetchToogle = () => {
    const [passedUrl, setUrl] = useState('')
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{

        if(passedUrl){
                setIsLoading(true)
                fetch(passedUrl)
                .then(res=>res.json())
                .then(res=>{
                    setResult(res)
                    setIsLoading(false)
                })
                .catch(console.error)
            }else{
                setResult('')
            }

    }, [passedUrl])

    return [result, isLoading, setUrl ]
}

export default useFetchToogle