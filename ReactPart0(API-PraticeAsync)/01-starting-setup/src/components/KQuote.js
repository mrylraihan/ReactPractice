import React, { useEffect } from "react"
import { getKanyeQuote } from "../api/apiCalls"
// import axios from "axios"

const StarShip = ({quote, setQuote})=>{
    
    useEffect(()=>{
        console.log('useEffect Working')
        // this will render the api cal for the first load and assign the state what it was returned which is why we see the first returned api stuff on the screen
        const fetchData = async () => {
            try {
                const res = await getKanyeQuote()//method that does api call
                // const res = await axios.get('https://api.kanye.rest') or we could have dont it this way 
                console.log(res);
                console.log(res.data);
                setQuote(res.data.quote)
            } catch (error) {
                setQuote('Something went wrong!')
            }
        }
        fetchData()
    }, [])//no dependencies so it only runs once then after that its up to the click/button to change the state 
    
    const gettingData =()=>{
        const fetchData = async () => {
            try {
                const res = await getKanyeQuote()//method that does api call
                // const res = await axios.get('https://api.kanye.rest') or we could have dont it this way 
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