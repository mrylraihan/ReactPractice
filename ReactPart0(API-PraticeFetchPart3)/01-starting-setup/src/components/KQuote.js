import React, { useEffect, useState } from "react"


const StarShip = ({quote, setQuote})=>{
    const [checkButton, setButton] = useState(false)
    useEffect(()=>{
        // Change from async await to fetch promises
        // console.log('useEffect Working')
  
        fetch('https://api.kanye.rest')
           .then(res=>res.json())
           .then(result=> {
               console.log(result.quote);
               setQuote(result.quote)
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