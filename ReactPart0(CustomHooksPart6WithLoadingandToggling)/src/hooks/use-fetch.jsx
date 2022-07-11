import { useEffect, useState } from 'react'

const useFetch = () => {
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
                setResult({message:'no data im sorry'})
            }

    }, [passedUrl])

    return [result, isLoading, setUrl ]
}

export default useFetch