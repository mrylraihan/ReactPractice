import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useAxios(api) {
    const [result, setResult] = useState('')
    useEffect(() => {
        if (api) {
            axios.get(api)
                .then(res => res.data)
                .then(setResult)
                .catch(console.error)
        }
    }, [api])

    return result
}

export default useAxios