import React, { useEffect } from "react"
import { getKanyeQuote } from "../api/apiCalls"

const StarShip = ({quote, setQuote})=>{
    
    useEffect(()=>console.log('useEffect Working'))
    const gettingData =()=>{
        const fetchData = async () => {
            try {
                const res = await getKanyeQuote()
                console.log(res);
                console.log(res.data);
                setQuote(res.data.quote)
            } catch (error) {
                setQuote('Something went wrong!')
            }
        }
        fetchData()
    }

    const getNewQuote = ()=> gettingData()
        


    return (
        <div>
            <button onClick={getNewQuote}>get Kanye Quote</button>
            <h1>{quote}</h1>
        </div>
    )
}
export default StarShip