import React, { useEffect, useState } from "react"
import { getKanyeQuote } from "../api/apiCalls"
// import axios from "axios"

const StarShip = ({quote, setQuote})=>{
    const [checkButton, setButton] = useState(false)
    useEffect(()=>{
        // Change from async await to fetch promises
        console.log('useEffect Working')
        // this will render the api cal for the first load and assign the state what it was returned which is why we see the first returned api stuff on the screen
        getKanyeQuote()
            .then(res => {
                console.log(res.data);
                console.log(res.data.quote);
                setQuote(res.data.quote)
                return
            })
    }, [checkButton])//no dependencies so it only runs once then after that its up to the click/button to change the state 
    
    const buttonHandler =()=>{
              setButton(checkButton? false: true )
    }

    
        


    return (
        <div>
            <button onClick={buttonHandler}>get Kanye Quote</button>
            <h1>{quote}</h1>
        </div>
    )
}
export default StarShip