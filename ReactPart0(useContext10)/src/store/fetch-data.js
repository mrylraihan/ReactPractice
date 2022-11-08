import React from 'react'

const FetchContext = React.createContext({
    data:'',
    getData:()=>{}
})

export default FetchContext